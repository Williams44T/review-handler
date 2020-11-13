var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
  _id: {
    type: Number,
    unique: true,
  },
  rating_categories: [{
    name: String, // ex. 'Width'
    left: String, // ex. 'too small'
    best: String, // ex. 'perfect!'
    right: {
      type: String, // ex. 'too big'
      default: ''
    }
  }]
})

var ProductModel = mongoose.model('Product', productSchema);

var insertOne = (product, next) => {
  ProductModel.create(product, next);
};

module.exports.insertOne = insertOne;