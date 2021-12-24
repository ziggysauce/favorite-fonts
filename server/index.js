const express = require('express');
const path = require('path');
const route = require('./route');
require('dotenv').config();

const app = express();
const { PORT } = process.env;

app.use(express.static(path.resolve(__dirname, '../client/build')));

route(app);

app.listen(process.env.PORT || 3000);

console.log(`API server is listening on port:${PORT || 3000}`);

/**
 * This is the old iteration of the code I had.
 * Keeping it here simply for reference
 */
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const path = require('path');
// require('dotenv').config();
// const fetch = require('node-fetch');

// const { NODE_ENV, SERVER_PORT, GOOGLE_FONTS_API_KEY } = process.env;
// const app = express();
// const port = SERVER_PORT;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cors());

// // Catch 404 and forward to error handler
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Credentials', true);
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// app.get('/api-test', async (req, res) => {
//   res.status(200).json({ data: 'Hello there.' });
// });

// app.get('/api', async (req, res) => {
//   const fetchUrl = `https://www.googleapis.com/webfonts/v1/webfonts?key=${GOOGLE_FONTS_API_KEY}&sort=popularity`;
//   let data = [];
//   try {
//     const response = await fetch(fetchUrl);
//     ({ items: data } = await response.json());
//   } catch (error) {
//     res.sendStatus(400);
//     return;
//   }
//   res.status(200).json({ data });
// });

// if (NODE_ENV === 'production') {
//   // All other GET requests not handled before will return our React app
//   app.use(express.static(path.resolve(__dirname, '../client/build')));
//   route(app);
//   app.get('/*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '..client', 'build', 'index.html'));
//   });
// }

// app.listen(port, () => {
//   console.log(`App running on port ${port}.`);
// });
