import React from 'react';
import StarToggle from './StarToggle.jsx';
import styled from 'styled-components';
import Styles from '../styles.js';

var StarFilter = (props) => (<Styles.Filter style={{display: props.filters.length > 0 ? 'flex' : 'none'}}>
  {/* <Styles.FilterText>Showing reviews:</Styles.FilterText> */}
  {'Showing reviews: '}
  {props.filters.map(filter => (
    <StarToggle
      key={filter}
      star={filter}
      onClick={props.onClick}
    />
  ))}
</Styles.Filter>);

export default StarFilter;