import React from 'react';
import StarToggle from './StarToggle.jsx';
import styled from 'styled-components';

var StarCountStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

var StarCount = (props) => (<StarCountStyle>
  <StarToggle
    star={props.star}
    onClick={props.onClick}
  />
  <div>bar will go here</div>
  <div>{props.count}</div>
</StarCountStyle>);

export default StarCount;