var ratingCategories = [
  //first ele is the name of category,
  //the other three represent the left point, midpoint, and right point of the rating scale, respectively
  ['size', 'too small', 'perfect', 'too large'],
  ['width', 'too narrow', 'perfect', 'too wide'],
  ['comfort', 'uncomfortable', '', 'comfortable'],
  ['quality', 'poor', '', 'perfect'],
  ['fit', 'too tight', 'perfect', 'too loose'],
  ['length', 'runs short', 'perfect', 'runs long']
]

var convertRatingCategories = (ratingCategories) => {
  return ratingCategories.map(category => {
    return {
      name: category[0],
      left: category[1],
      best: category[2],
      right: category[3]
    };
  });
};

var ratingCategoryData = convertRatingCategories(ratingCategories);

module.exports = ratingCategoryData;