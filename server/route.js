const path = require('path');
require('dotenv').config();
const fetch = require('node-fetch');

const { GOOGLE_FONTS_API_KEY } = process.env;

module.exports = (app) => {
  app.get('/api-test', async (req, res) => {
    res.status(200).json({ data: 'Hello there.' });
  });

  app.get('/api', async (req, res) => {
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

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
};
