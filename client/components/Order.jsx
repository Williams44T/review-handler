import React from 'react';
import Styles from '../styles.js';

var Order = (props) => (<Styles.Order>
  <Styles.OrderButton
    active={props.order === 'newest' ? true : false}
    onClick={() => props.onClick('newest')}
  >NEWEST</Styles.OrderButton>
  <Styles.OrderButton
    active={props.order === 'helpful' ? true : false}
    onClick={() => props.onClick('helpful')}
  >HELPFUL</Styles.OrderButton>
  <Styles.OrderButton
    active={props.order === 'relevant' ? true : false}
    onClick={() => props.onClick('relevant')}
  >RELEVANT</Styles.OrderButton>
</Styles.Order>);

export default Order;