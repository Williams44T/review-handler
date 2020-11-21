import React from 'react'

var Category = (props) => (<div>
  <div>{props.category.name.toUpperCase()}</div>
  <div>scale goes here</div>
  <div>{props.category.left.toUpperCase()}</div>
  <div>{props.category.best.toUpperCase()}</div>
  <div>{props.category.right.toUpperCase()}</div>
</div>);

export default Category;