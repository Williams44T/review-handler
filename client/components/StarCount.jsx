import React from 'react';

var StarCount = (props) => (<div>
  <div>{props.star} STARS</div>
  <div>bar will go here</div>
  <div>{props.count}</div>
</div>);
export default StarCount;