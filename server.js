import express from 'express';
import path from 'path';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

let forexData = null;

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

    forexData = await response.json();

  } catch (error) {
    console.error('Error fetching forex rates:', error);
  }
}

setInterval(fetchForexRates, 10 * 60 * 1000);
fetchForexRates();

app.use(express.static(path.resolve('public')));

app.get('/api/forex', async (req, res) => {
  if (forexData) {
    return res.json(forexData);
  }

  try {
    const response = await fetch(process.env.API_URL, {
      headers: { apikey: process.env.API_KEY },
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      console.error(`Error fetching forex rates: ${response.status} - ${response.statusText}`);
      console.error(`API Response: ${errorMessage}`);
      return res.status(response.status).send(errorMessage);
    }
  } catch (error) {
    console.error('Error fetching forex rates:', error);
    return res.status(500).send('Internal server error');
  }

  res.status(503).send('Data is currently being fetched. Please try again later.');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
