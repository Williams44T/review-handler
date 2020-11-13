var ratingCategoryData = require('./ratingCategoryData'); //array of objects
var Products = require('../db/models/products.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/adidas');

var shuffle = (arr) => {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};

var createProducts = (qty) => {
  var products = [];

  for (var i = 0; i < qty; i++) {
    var categoryQty = Math.floor(Math.random() * 4) + 2 //min of 2, max of 5
    shuffle(ratingCategoryData);
    var product = {
      product_id: i,
      rating_categories: ratingCategoryData.slice(0, categoryQty)
    };
    Products.insertOne(product);
    products.push(product);
  }

  return products;
};

Products.removeAll(() => {
  var products = createProducts(2);
  console.log(products);
});