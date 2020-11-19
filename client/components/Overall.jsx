import React from 'react';

var Overall = (props) => (<div>
  <div>{props.avgRating}</div>
  <div>stars will go here</div>
  <div>{props.reviewCount} Reviews</div>
</div>)

export default Overall;