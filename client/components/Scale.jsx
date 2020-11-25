import React from 'react';
import Styles from '../styles.js';

var Scale = (props) => (<Styles.CategoryScale>
  <Styles.ScaleTriangle rating={props.rating}/>
  <Styles.ScaleDividers>
    {Array(3).fill().map((divider, idx) => <Styles.ScaleDivider key={idx} />)}
  </Styles.ScaleDividers>
</Styles.CategoryScale>);

export default Scale;