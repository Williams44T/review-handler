import React from 'react';

var Recommendation = (props) => (<div>
  <div>{props.recommended}%</div>
  <p>of customers recommend this product</p>
</div>);

export default Recommendation;