const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const fetch = require('node-fetch');

const { SERVER_PORT, GOOGLE_FONTS_API_KEY } = process.env;
const app = express();
const port = SERVER_PORT;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', async (req, res) => {
  const fetchUrl = `https://www.googleapis.com/webfonts/v1/webfonts?key=${GOOGLE_FONTS_API_KEY}&sort=popularity`;
  let data = [];
  try {
    const response = await fetch(fetchUrl);
    ({ items: data } = await response.json());
  } catch (error) {
    res.sendStatus(400);
    return;
  }
  res.status(200).json({ data });
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
