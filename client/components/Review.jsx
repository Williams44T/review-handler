import React from 'react';
import faker from 'faker';
import Rating from './Rating.jsx';

var Reviews = (props) => {
  var review = props.review;

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var formDate = (date) => `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

  return (<div>
    <div><Rating /></div>
    <div>{formDate(new Date(review.created))}</div>
    <div>{review.summary}</div>
    <div>{review.detail}</div>
    <div style={{display: review.recommended ? 'block' : 'none'}}>I recommend this product</div>
    {/* <div>{review.photos.map(photo => <img src={`${photo}?random=${faker.date.recent()}`} />)}</div> */}
    <div>{review.username}</div>
    <div style={{display: review.verified ? 'block' : 'none'}}>- Verified Purchaser</div>
    <div>Was this review helpful?</div>
    <button>Yes</button><div>{review.helpful.yes}</div>
    <button>No</button><div>{review.helpful.no}</div>
  </div>);
};

export default Reviews;