import React from 'react';
import Review from './Review.jsx';
import Actions from './Actions.jsx';

var Reviews = (props) => (<div>
  {props.reviews.slice(0, props.reviewCount).map(review => (
    <Review
      review={review}
      key={review._id}
    />
  ))}
  <Actions onClick={props.onClick} />
</div>);

export default Reviews;