var express = require('express');
var mongoose = require('mongoose');
var productController = require('../db/controllers/products.js');

var mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
mongoose.connect('mongodb://localhost/adidas', mongoOptions);

var app = express();

app.get('/products/:id/reviews', (req, res) => {
  console.log('GET request received for product id ' + req.params.id);
  productController.findProduct(req, res);
});

var port = 8000;
app.listen(port, () => {
  console.log('listening on port: ' + port);
});