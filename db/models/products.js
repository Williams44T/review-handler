var mongoose = require('mongoose');

var productSchema = mongoose.schema({
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