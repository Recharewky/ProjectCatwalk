/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 50%;
  cursor: pointer;
  border-width: 5px;
  border-color: ${(props) => props.accent};
  border-style: solid;
  background-color: ${(props) => props.main};
  height: 45px;
  width: 45px;
  margin-right: 15px;
  margin-bottom: 8px;
  margin-top: 8px;
  margin-left: 4px;
  background-image: linear-gradient(to bottom right, ${(props) => props.main} 16%, ${(props) => props.accent});
  outline: ${(props) => props.selected};
  outline-color: orange;
  z-index: 5;

  &:hover {
    background-image: linear-gradient(to bottom right, ${(props) => props.accent} 16%, ${(props) => props.main});
  }
`;

const Style = ({ style, onStyleChange, currentStyle }) => {
  let mainColor = style.name.substring(style.name.indexOf(' ') + 1);
  mainColor = mainColor.substring(0, mainColor.indexOf(' ')).toLowerCase();
  let accentColor = style.name.substring(style.name.indexOf('&') + 1).trim(' ').toLowerCase();
  if (accentColor === 'white') {
    accentColor = '#f5f5f5';
  }

  const selected = style.name === currentStyle.name;
  // console.log(`${mainColor}<-main    accent->${accentColor}`);
  return (
    <StyledButton
      type="button"
      onClick={(e) => { onStyleChange(e, style); }}
      main={mainColor}
      accent={accentColor}
      selected={selected ? 'dotted' : 'none'}
    />
  );
};

export default Style;
