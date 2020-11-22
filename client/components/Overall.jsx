import React from 'react';
import Rating from './Rating.jsx';
import Styles from '../styles.js';

var Overall = (props) => (<Styles.Overall>
  <Styles.RatingNum>{props.avgRating}</Styles.RatingNum>
  <div style={{'padding-left': '8px'}}>
    <Rating rating={props.avgRating} />
    <Styles.ReviewCount><strong>{props.reviewCount}</strong> Reviews</Styles.ReviewCount>
  </div>
</Styles.Overall>)

export default Overall;