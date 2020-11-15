var mongoose = require('mongoose');

var reviewSchema = mongoose.Schema({
  rating: Number,
  recommended: Boolean,
  created: Date,
  username: String,
  summary: String,
  detail: String,
  verified: Boolean,
  photos: [String],
  helpful: {
    yes: Number,
    no: Number
  },
  category_ratings: [{
    name: String,
    rating: Number
  }]
});

module.exports = reviewSchema;