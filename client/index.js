import App from './components/App.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

//dates (review.created) fresh from the db look like this: 2018-11-27T11:14:53.572Z
var convertDates = (reviews) => {
  reviews.forEach(review => {
    var dateAndTime = review.created.split('.')[0].split('T'); //[2018-11-27, 11:14:53]
    var parts = dateAndTime[0].split('-').concat(dateAndTime[1].split(':')); //[2018, 11, 27, 11, 14, 53]
    review.created = new Date(...parts);
  });
};

$.get('/products/44/reviews', (product) => {
  convertDates(product.reviews);
  console.log(product);
  ReactDOM.render(<App product={product} />, document.getElementById('app'));
});