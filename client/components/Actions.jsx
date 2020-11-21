import React from 'react';
import styled from 'styled-components';

var ActionsStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;
var ButtonStyle = styled.button`
  width: 50%;
`;

var Actions = (props) => (<ActionsStyle>
  <ButtonStyle onClick={props.onClick}>LOAD MORE</ButtonStyle>
  <ButtonStyle>WRITE A REVIEW</ButtonStyle>
</ActionsStyle>);

export default Actions;