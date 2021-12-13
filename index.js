const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const fetch = require('node-fetch');

const { PORT, GOOGLE_FONTS_API_KEY } = process.env;
const app = express();
const port = PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

app.get('/api', async (req, res) => {
  res.status(200).json({ data: 'this is the data' });
});

app.get('/api/fonts', async (req, res) => {
  const fetchUrl = `https://www.googleapis.com/webfonts/v1/webfonts?key=${GOOGLE_FONTS_API_KEY}&sort=popularity`;
  let data = [];
  try {
    const response = await fetch(fetchUrl);
    const json = await response.json();
    data = json.items.slice(0, 10); // Just grab first 10 for now
  } catch (error) {
    console.log('THE ERROR: ', error);
    res.sendStatus(400);
    return;
  }
  res.status(200).json({ data });
});
