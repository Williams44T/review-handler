var ratingCategoryData = require('./ratingCategoryData'); //array of objects

var shuffle = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

// var createProducts = (qty) => {
//   var products = [];

//   for (i = 0; i < qty; i++) {
//     //randomly choose how many rating categories we want this product to have
//     var categoryQty = Math.floor(Math.random() * 4) + 2 //min of 2, max of 5
//     //shuffle the category data

//     products.push({
//       id: i,
//       rating_categories
//     })
//   }
// }