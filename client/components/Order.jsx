import React from 'react';

var Order = (props) => (<div>
  <div onClick={() => props.onClick('newest')}>NEWEST</div>
  <div onClick={() => props.onClick('helpful')}>HELPFUL</div>
  <div onClick={() => props.onClick('relevant')}>RELEVANT</div>
</div>);

export default Order;