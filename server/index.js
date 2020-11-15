var express = require('express');
var productController = require('../db/controllers/products.js');

var app = express();

app.get('/', (req, res) => {
  res.send('hello world')
});

var port = 8000;
app.listen(port, () => {
  console.log('listening on port: ' + port);
});