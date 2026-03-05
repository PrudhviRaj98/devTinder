const express = require('express');

const app = express();

app.use('/hello', (req, res) => {
  res.send('hello entered');
});

app.use('/test', (req, res) => {
  res.send('test from server');
});

app.use('/home', (req, res) => {
  res.send('home from server');
});

app.listen(3000, () => {
  console.log('server is sucessfully running ');
});
