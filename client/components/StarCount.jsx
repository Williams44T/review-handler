import React from 'react';
import StarToggle from './StarToggle.jsx';

var StarCount = (props) => (<div>
  <StarToggle star={props.star} />
  <div>bar will go here</div>
  <div>{props.count}</div>
</div>);

export default StarCount;