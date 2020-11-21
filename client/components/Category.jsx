import React from 'react'
import styled from 'styled-components';

var ScaleStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

var Category = (props) => (<div>
  <div>{props.category.name.toUpperCase()}</div>
  <div>scale goes here</div>
  <ScaleStyle>
    <div>{props.category.left.toUpperCase()}</div>
    <div>{props.category.best.toUpperCase()}</div>
    <div>{props.category.right.toUpperCase()}</div>
  </ScaleStyle>
</div>);

export default Category;