import React from 'react';

var StarToggle = (props) => (
  <button onClick={() => props.onClick(props.star)}>{props.star} STARS</button>
);

export default StarToggle;