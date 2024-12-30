import express from 'express';
import path from 'path';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve('public')));

app.get('/api/forex', async (req, res) => {
  try {
    const response = await fetch(process.env.API_URL, {
      headers: { apikey: process.env.API_KEY },
    });

    if (!response.ok) {
      return res.status(response.status).send(response.statusText);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error proxying request:', error);
    res.status(500).send('Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
