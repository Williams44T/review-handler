var mongoose = require('mongoose');
var reviewSchema = require('./reviews.js')

var productSchema = mongoose.Schema({
  product_id: {
    type: Number,
    unique: true,
  },
  rating_categories: [{
    name: String, // ex. 'Width'
    left: String, // ex. 'too small'
    best: String, // ex. 'perfect!'
    right: String, // ex. 'too big'
  }],
  reviews: [reviewSchema]
});

var ProductModel = mongoose.model('Product', productSchema);

var insertOne = (product, next=()=>{}) => {
  ProductModel.create(product, next);
};

var removeAll = (next=()=>{}) => {
  ProductModel.db.dropCollection('products', next);
};

module.exports.insertOne = insertOne;
module.exports.removeAll = removeAll;