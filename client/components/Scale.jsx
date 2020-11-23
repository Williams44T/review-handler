import React from 'react';
import Styles from '../styles.js';

var Scale = (props) => (<Styles.CategoryScale>
  <Styles.ScaleTriangle rating={props.rating}/>
  <Styles.ScaleDividers>
    {Array(3).fill().map(divider => <Styles.ScaleDivider />)}
  </Styles.ScaleDividers>
</Styles.CategoryScale>);

export default Scale;