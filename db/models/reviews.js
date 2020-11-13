var mongoose = require('mongoose');

var reviewSchema = mongoose.Schema({
  product_id: Number,
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

var ReviewModel = mongoose.model('Review', reviewSchema);

var insertOne = (review, next) => {
  ReviewModel.create(review, next);
};

module.exports.insertOne = insertOne;