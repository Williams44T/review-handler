import React from 'react';
import faker from 'faker';
import Rating from './Rating.jsx';
import Styles from '../styles.js';

var Reviews = (props) => {
  var review = props.review;

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var formDate = (date) => `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

  return (<Styles.Review>
    <div style={{display: 'flex', 'justify-content': 'space-between'}}>
      <Rating rating={review.rating} />
      <Styles.ReviewDate>{formDate(new Date(review.created))}</Styles.ReviewDate>
    </div>
    <Styles.Summary>{review.summary}</Styles.Summary>
    <Styles.Detail>{review.detail}</Styles.Detail>
    <Styles.UserRecommendation recommended={review.recommended}>
      <svg width='19px' height='19px' style={{'margin-right': '6px'}}>
        <path d="M2.5 10.5l4 4 10-10" fill="none" stroke="currentcolor"/>
      </svg>
      <span>I recommend this product</span>
    </Styles.UserRecommendation>
    <div style={{'margin-top': '20px'}}>
      {review.photos.map(photo => (
        <Styles.Photo src={`${photo}?random=${faker.date.recent()}`} />
      ))}
    </div>
    <Styles.User>
      <Styles.Name>{review.username}</Styles.Name>
      <Styles.Verified verified={review.verified}> - Verified Purchaser</Styles.Verified>
    </Styles.User>
    <Styles.Helpful>
      Was this review helpful?
      <div style={{'margin-left': '12px'}}>
        <Styles.HelpfulButton>Yes</Styles.HelpfulButton>
        <Styles.HelpfulCount>({review.helpful.yes})</Styles.HelpfulCount>
      </div>
      <div style={{'margin-left': '12px'}}>
        <Styles.HelpfulButton>No</Styles.HelpfulButton>
        <Styles.HelpfulCount>({review.helpful.no})</Styles.HelpfulCount>
      </div>
    </Styles.Helpful>
  </Styles.Review>);
};

export default Reviews;