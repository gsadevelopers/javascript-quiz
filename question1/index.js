const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.send('Hello world');
});

app.listen(8888, () => {
  console.log('Running');
});

