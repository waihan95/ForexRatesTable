import express from 'express';
import path from 'path';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

let forexData = null;
let lastFetchedTime = null;

const CACHE_EXPIRY_MS = process.env.CACHE_EXPIRY_MS || 10 * 60 * 1000;

async function fetchForexRates() {
  try {
    const response = await fetch(process.env.API_URL, {
      headers: { apikey: process.env.API_KEY },
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      console.error(`Error fetching forex rates: ${response.status} - ${response.statusText}`);
      console.error(`API Response: ${errorMessage}`);
      return;
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error fetching forex rates:', error);
    return null;
  }
}

async function getForexRates() {
  const currentTime = Date.now();

  if (forexData && lastFetchedTime && currentTime - lastFetchedTime < CACHE_EXPIRY_MS) {
    console.log('Serving from cache');
    return forexData;
  }

  console.log('Fetching new data from API');
  forexData = await fetchForexRates();
  lastFetchedTime = Date.now();
  return forexData;
}

app.use(express.static(path.resolve('public')));

app.get('/api/forex', async (req, res) => {
  const data = await getForexRates();
  if (data) {
    return res.json(data);
  }
  res.status(500).send('Failed to fetch forex rates.');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
