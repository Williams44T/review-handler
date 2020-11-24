import React from 'react';
import Styles from '../styles.js';

var StarToggle = (props) => {
  var style = {'textDecoration': props.onClick? 'underline' : 'none'}
  var onClick = props.onClick ? () => props.onClick(props.star) : ()=>{};
  return <Styles.StarToggle
    onClick={onClick}
    style={style}
    >{props.star} STARS
  </Styles.StarToggle>
};

export default StarToggle;