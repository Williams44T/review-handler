import React from 'react';
import styled from 'styled-components';

var ActionsStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;
var LoadButtonStyle = styled.button`
  width: 50%;
  height: 50px;
  border: 1px solid black;
  background-color: transparent;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
`;
var WriteButtonStyle = styled.button`
  width: 50%;
  height: 50px;
  border: 1px solid black;
  background-color: black;
  color: white;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
`;

var Actions = (props) => (<ActionsStyle>
  <LoadButtonStyle onClick={props.onClick}>LOAD MORE</LoadButtonStyle>
  <WriteButtonStyle>WRITE A REVIEW</WriteButtonStyle>
</ActionsStyle>);

export default Actions;