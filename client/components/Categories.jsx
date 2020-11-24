import React from 'react';
import Category from './Category.jsx';
import Styles from '../styles.js';

var Categories = (props) => {

  var getAvgRatingPerCategory = (categories, reviews) => {

    categories.forEach(category => category.rating = 0);

    reviews.forEach(review => {
      review.category_ratings.forEach((category, idx) => {
        categories[idx].rating += category.rating;
      });
    });

    categories.forEach(category => category.rating /= reviews.length);
  }

  getAvgRatingPerCategory(props.categories, props.reviews);

  return (<Styles.Categories>
    {props.categories.map(category => (
      <Category
        key={category.name}
        category={category}
      />))}
  </Styles.Categories>);
};

export default Categories;