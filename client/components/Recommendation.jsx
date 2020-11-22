import React from 'react';
import Styles from '../styles.js';

var Recommendation = (props) => (<Styles.Recommendation>
  <Styles.RecommendationPercent>{props.recommended}%</Styles.RecommendationPercent>
  <Styles.RecommendationText>of customers recommend this product</Styles.RecommendationText>
</Styles.Recommendation>);

export default Recommendation;