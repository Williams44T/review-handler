var ratingCategoryData = require('./ratingCategoryData'); //array of objects
var Products = require('../db/models/products.js');
var Reviews = require('../db/models/reviews.js');
var mongoose = require('mongoose');
var fake = require('faker');

mongoose.connect('mongodb://localhost/adidas');

var shuffle = (arr) => {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};

var seedProducts = (qty) => {
  var products = [];

  for (var i = 0; i < qty; i++) {
    var categoryQty = Math.floor(Math.random() * 4) + 2; //min of 2, max of 5
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

var createImages = (maxQty) => {
  var images = [];
  var qty = Math.floor(Math.random() * maxQty)//0 is a possibility

  for (var i = 0; i < qty; i++) {
    images.push(fake.image.cats());
  }

  return images;
}

var seedReviews = (products, min, max) => {

  for (var i = 0; i < products.length; i++) {
    var reviewQty = Math.floor(Math.random() * (max - min)) + min;

    for (var j = 0; j < reviewQty; j++) {
      var rating = Math.floor(Math.random() * 5) + 1; //min of 1, max of 5
      var review = {
        product_id: products[i].product_id,
        rating,
        recommended: rating > 2 ? true : false,
        created: fake.date.between('2017-03-01', new Date()),
        username: fake.internet.userName(),
        summary: fake.lorem.sentence(),
        detail: fake.lorem.paragraph(),
        verified: [true, false][Math.floor(Math.random() * 2)],
        photos: createImages(4),
        helpful: {
          yes: Math.floor(Math.random() * 10),
          no: Math.floor(Math.random() * 10)
        },
        category_ratings: products[i].rating_categories.map(category => {
          return {
            name: category.name,
            rating: Math.floor(Math.random() * 5) + 1 //min of 1, max of 5
          };
        })
      }
      Reviews.insertOne(review);
    }
  }
}

Products.removeAll(() => {
  var products = seedProducts(2);
  Reviews.removeAll(() => {
    seedReviews(products, 1, 5);
  });
});