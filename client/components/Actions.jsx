import React from 'react';
import Styles from '../styles.js'

var Actions = (props) => (<Styles.Actions>
  <Styles.ActionButton onClick={props.onClick}>
    <Styles.ActionText>LOAD MORE</Styles.ActionText>
    <svg width="24px" height="24px">
      <path
        d="M 17.59 7 l 5 5 l -5 5 M 0 12 h 22"
        fill="none"
        strokeWidth="2"
        stroke="currentcolor"
      />
    </svg>
  </Styles.ActionButton>
  <Styles.WriteButton >
    <Styles.ButtonBefore />
    <Styles.ActionText>WRITE A REVIEW</Styles.ActionText>
    <svg width="24px" height="24px">
      <path
        d="M 17.59 7 l 5 5 l -5 5 M 0 12 h 22"
        fill="none"
        strokeWidth="2"
        stroke="currentcolor"
      />
    </svg>
  </Styles.WriteButton>
</Styles.Actions>);

export default Actions;