const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const fetch = require('node-fetch');

const { NODE_ENV, SERVER_PORT, GOOGLE_FONTS_API_KEY } = process.env;
const app = express();
const router = express.Router();
const port = SERVER_PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

router.get('/api-test', async (req, res) => {
  res.status(200).json({ data: 'Hello there.' });
});

router.get('/api', async (req, res) => {
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

app.use(router);

if (NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));

  // All other GET requests not handled before will return our React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  // Catch 404 and forward to error handler
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
}

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
