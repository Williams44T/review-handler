import React from 'react';
import styled from 'styled-components';

var OrderStyle = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 14px;
`;

var Order = (props) => (<OrderStyle>
  <div onClick={() => props.onClick('newest')}>NEWEST</div>
  <div onClick={() => props.onClick('helpful')}>HELPFUL</div>
  <div onClick={() => props.onClick('relevant')}>RELEVANT</div>
</OrderStyle>);

export default Order;