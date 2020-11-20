import React from 'react';
import faker from 'faker';

var Reviews = (props) => {
  var review = props.review;

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var formDate = (date) => `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;



  return (<div>
    <div>stars will go here</div>
    <div>{formDate(new Date(review.created))}</div>
    <div>{review.summary}</div>
    <div>{review.detail}</div>
    <div style={{display: review.recommended ? 'block' : 'none'}}>I recommend this product</div>
    <div>{review.photos.map(photo => <img src={`${photo}?random=${faker.date.recent()}`} />)}</div>
  </div>);
};

export default Reviews;


/*
stars
date
summary
detail
recommended?
photos
username
verified?
was this review helpful
yes
number
no
number
*/
