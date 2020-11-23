import styled, { createGlobalStyle } from 'styled-components';



var Styles = {
  GlobalStyle: createGlobalStyle`
   *, :after, :before {
     box-sizing: border-box;
   }
   h1, h2, h3, h4, h5, h6 {
     margin: 0;
     padding: 0;
   }
   button {
     margin: 0;
     outline: none;
   }
  `,
  App: styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 970px;
  margin: 0;
  padding: 6px 20px 0px 20px;
  background-color: #fff;
  color: #000;
  font-family: AdineuePRO,Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  text-transform: none;
  text-rendering: optimizeLegibility;
  `,
  //App >
  Title: styled.h5`
  width: 100%;
  margin: 0 0 20px;
  line-height: 24px;
  font-size: 26px;
  font-weight: 1000;
  `,
  //App >
  Ratings: styled.div`
  width: 100%;
  margin-bottom: 40px;
  @media (min-width: 960px) {
    width: calc(33.3333% - 10px);
  };
  `,
  //App > Ratings >
  Overall: styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #2ada71;
  `,
  //App > Ratings > Overall >
  RatingNum: styled.div`
  font-size: 56px;
  font-weight: 700;
  text-align: right;
  padding-right: 8px;
  `,
  //App > Ratings > Overall >
  ReviewCount: styled.div`
  `,
  //App > Ratings >
  Breakdown: styled.div`
  margin-top: 20px;
  border-bottom: 1px solid #ebedee;
  padding-bottom: 20px;
  `,
  //App > Ratings > Breakdown >
  BreakdownTitle: styled.h5`
  margin-bottom: 20px;
  line-height: 16px;
  font-size: 18px;
  font-weight: 1000;
  `,
  //App > Ratings > Breakdown >
  Filter: styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 20px;
  white-space: pre;
  `,
  //App > Ratings > Breakdown > Filter >
  StarToggle: styled.button`
  border: none;
  padding: 2px 2px 3px;
  background-color: transparent;
  line-height: 17px;
  text-align: center;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  cursor: pointer;
  `,
  //App > Ratings > Breakdown >
  StarCount: styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-size: 11px;
  line-height: 15px;
  letter-spacing: 2px;
  `,
  //App > Ratings > Breakdown > StarCount >
  StarCountBar: styled.div`
  flex-grow: 1;
  border-radius: 2px;
  margin: 0 10px;
  background-color: #767677;
  `,
  //App > Ratings > Breakdown > StarCount > StarCountBar >
  StarCountBarFill: styled.div`
  width: ${props => props.width * 100}%;
  height: 4px;
  border-radius: 2px;
  background-color: #2ada71;
  `,
  //App > Ratings > Breakdown > StarCount >
  StarCountNum: styled.div`
  `,
  //App > Ratings >
  Recommendation: styled.div`
  margin-top: 20px;
  `,
  //App > Ratings > Recommendation >
  RecommendationPercent: styled.h4`
  font-size: 56px;
  line-height: 48px;
  font-weight: 600;
  `,
  //App > Ratings > Recommendation >
  RecommendationText: styled.span`
  `,
  //App > Ratings >
  Categories: styled.div`
  `,
  //App > Ratings > Categories >
  Category: styled.div`
  margin-top: 20px;
  font-size: 13px;
  text-align: left;
  letter-spacing: 2px;
  text-transform: uppercase;
  `,
  //App > Rating > Categories > Category >
  CategoryName: styled.div`
  margin-bottom: 7px;
  `,
  //App > Rating > Categories > Category >
  CategoryScale: styled.div`
  height: 4px;
  background-color: #767677;
  `,
  //App > Rating > Categories > Category > CaetgoryScale >
  ScaleTriangle: styled.div`
  position: relative;
  top: -8px;
  left: ${props => props.rating / 5 * 100}%;
  width: 0;
  border: 1px solid transparent;
  border-width: 20px 10px;
  border-top-color: #2ada71;
  transform: translateX(-50%);
  z-index: 1;
  `,
  //App > Rating > Categories > Category > CategoryScale >
  ScaleDividers: styled.div`
  display: flex;
  justify-content: space-evenly;
  position: relative;
  bottom: 40px;
  `,
  //App > Rating > Categories > Category > CategoryScale > ScaleBreaks >
  ScaleDivider: styled.div`
  width: 4px;
  height: 4px;
  background-color: white;
  `,
  //App > Rating > Categories > Category >
  ScaleLabels: styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-size: 11px;
  `,
  //App > Rating > Categories > Category > ScaleLabels >
  ScaleLabel: styled.span`
  line-height: 15px;
  `,
  //App >
  Reviews: styled.div`
  width: 100%;
  @media (min-width: 960px) {
    width: calc(66.66667% - 10px);
  };
  `,
    //App >
  Reviews: styled.div`
  width: 100%;
  @media (min-width: 960px) {
    width: calc(66.66667% - 10px);
  };
  `,
  //App > Reviews >
  Order: styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 14px;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-size: 14px;
  `,
  //App > Reviews > Order
  OrderButton: styled.button`
  width: 100%;
  margin-left: -1px;
  border: 1px solid #767677;
  border-color: ${props => props.active ? 'black' : '#767677'};
  box-shadow: ${props => props.active? 'inset 0 -2px 0 #000' : 'none'};
  padding: 16px 10px;
  color: ${props => props.active? 'black' : '#767677'};
  background-color: transparent;
  font-size: 14px;
  font-weight: ${props => props.active? '700' : '400'};
  cursor: pointer;
  z-index: ${props => props.active? '1' : '0'};
  `,
};

export default Styles;