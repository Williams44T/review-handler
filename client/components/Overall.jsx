import React from 'react';
import Rating from './Rating.jsx';

var Overall = (props) => (<div>
  <div>{props.avgRating}</div>
  <Rating />
  <div>{props.reviewCount} Reviews</div>
</div>)

export default Overall;