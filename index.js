const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

app.get('/api', (req, res) => {
  res.status(200).json({ data: 'this is the data' });
});
