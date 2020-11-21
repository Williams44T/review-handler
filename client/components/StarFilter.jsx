import React from 'react';
import StarToggle from './StarToggle.jsx';
import styled from 'styled-components';

var StarFilterStyle = styled.div`
  flex-wrap: wrap;
`;

var StarFilter = (props) => (<StarFilterStyle style={{display: props.filters.length > 0 ? 'flex' : 'none'}}>
  <div>Showing reviews:</div>
  {props.filters.map(filter => (
    <StarToggle
      key={filter}
      star={filter}
      onClick={props.onClick}
    />
  ))}
</StarFilterStyle>);

export default StarFilter;