import React from 'react';
import Styles from '../styles.js';

var Scale = (props) => (<Styles.CategoryScale>
  <Styles.ScaleTriangle rating={props.rating}/>
  {/* <div>bars * 4 divs</div> */}
</Styles.CategoryScale>);

export default Scale;