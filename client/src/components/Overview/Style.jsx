/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 50%;
  cursor: pointer;
  border-width: 5px;
  border-color: ${(props) => props.accent};
  background-color: ${(props) => props.main};
  height: 45px;
  width: 45px;
  margin-right: 15px;
  margin-bottom: 8px;
  margin-top: 8px;
`;

// background-image: linear-gradient(to bottom right,
// ${(props) => props.main} 33%, ${(props) => props.accent});

const Style = ({ style, onStyleChange }) => {
  let mainColor = style.name.substring(style.name.indexOf(' ') + 1);
  mainColor = mainColor.substring(0, mainColor.indexOf(' ')).toLowerCase();
  const accentColor = style.name.substring(style.name.indexOf('&') + 1).trim(' ').toLowerCase();
  // console.log(`${mainColor}<-main    accent->${accentColor}`);
  return (
    <StyledButton type="button" onClick={(e) => { onStyleChange(e, style); }} main={mainColor} accent={accentColor} />
  );
};

export default Style;
