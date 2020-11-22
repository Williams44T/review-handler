import React from 'react';
import faker from 'faker';
import Rating from './Rating.jsx';
import styled from 'styled-components';

var FlexDisplay = styled.div`
  display: flex;
  justify-content: space-between;
`;
var HelpfulStyle = styled.div`
  display: flex;
  font-size: 14px;
`;
var HelpfulButtonStyle = styled.button`
  background-color: transparent;
  border: none;
  text-decoration: underline;
`;
var HelpfulCountStyle = styled.div`
  color: #767677;
  line-height: 20px;
`;
var DateStyle = styled.div`
  color: #767677;
  font-size: 14px;
  line-height: 20px;
`;
var SummaryStyle = styled.div`
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 0.7px;
  font-weight: 600;
  text-transform: uppercase;
`;
var RecommendationStyle = styled.div`
  font-size: 14px;
  line-height: 20px;
`;
var NameStyle = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  text-transform: uppercase;
`;

var Reviews = (props) => {
  var review = props.review;

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var formDate = (date) => `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

  return (<div>
    <FlexDisplay>
      <div><Rating rating={review.rating} /></div>
      <DateStyle>{formDate(new Date(review.created))}</DateStyle>
    </FlexDisplay>
    <SummaryStyle>{review.summary}</SummaryStyle>
    <div>{review.detail}</div>
    <RecommendationStyle style={{display: review.recommended ? 'block' : 'none'}}>I recommend this product</RecommendationStyle>
    {/* <div>{review.photos.map(photo => <img src={`${photo}?random=${faker.date.recent()}`} />)}</div> */}
    <NameStyle>{review.username}</NameStyle>
    <div style={{display: review.verified ? 'block' : 'none'}}>- Verified Purchaser</div>
    <HelpfulStyle>
      <div>Was this review helpful?</div>
      <HelpfulButtonStyle>Yes</HelpfulButtonStyle><HelpfulCountStyle>({review.helpful.yes})</HelpfulCountStyle>
      <HelpfulButtonStyle>No</HelpfulButtonStyle><HelpfulCountStyle>({review.helpful.no})</HelpfulCountStyle>
    </HelpfulStyle>
  </div>);
};

export default Reviews;