import React from 'react';
import StarToggle from './StarToggle.jsx';
import Styles from '../styles.js';

var StarCount = (props) => (<Styles.StarCount>
  <StarToggle
    star={props.star}
    onClick={props.onClick}
  />
  <Styles.StarCountBar>
    <Styles.StarCountBarFill width={props.count / props.total}/>
  </Styles.StarCountBar>
  <Styles.StarCountNum>{props.count}</Styles.StarCountNum>
</Styles.StarCount>);

export default StarCount;