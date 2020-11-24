import React from 'react'
import Scale from './Scale.jsx';
import Styles from '../styles.js';

var Category = (props) => (<Styles.Category>
  <Styles.CategoryName>{props.category.name.toUpperCase()}</Styles.CategoryName>
  <Scale rating={props.category.rating} />
  <Styles.ScaleLabels>
    <Styles.ScaleLabel>{props.category.left.toUpperCase()}</Styles.ScaleLabel>
    <Styles.ScaleLabel>{props.category.best.toUpperCase()}</Styles.ScaleLabel>
    <Styles.ScaleLabel>{props.category.right.toUpperCase()}</Styles.ScaleLabel>
  </Styles.ScaleLabels>
</Styles.Category>);

export default Category;