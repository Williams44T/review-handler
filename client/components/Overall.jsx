import React from 'react';
import Rating from './Rating.jsx';
import styled from 'styled-components';

var OverallStyle = styled.div`
  background-color: #2ada71;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;
var RatingNumStyle = styled.div`
  // height: 100%;
`;

var Overall = (props) => (<OverallStyle>
  <RatingNumStyle>{props.avgRating}</RatingNumStyle>
  <div>
    <Rating rating={props.avgRating} />
    <div>{props.reviewCount} Reviews</div>
  </div>
</OverallStyle>)

export default Overall;