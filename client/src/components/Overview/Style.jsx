/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

// Colors to use
// Green:      #687864
// Dark blue   #31708E
// Medium blue #5085A5
// Light blue  #8FC1E3
// Off white   #F7F9FB

const StyledButton = styled.button`
  border-radius: 50%;
  cursor: pointer;
  border-width: 4px;
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
  outline-color: #8FC1E3;
  z-index: 5;
  border-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:hover {
    background-image: linear-gradient(to bottom right, ${(props) => props.accent} 16%, ${(props) => props.main});
    transform: translate(0, -10px);
    transform: scale(1.1);
  }
`;

const Style = ({ style, onStyleChange, currentStyle }) => {
  // When using color schemes that include names for colors that dont exist as named colors in CSS
  // let mainColor = style.name.substring(style.name.indexOf(' ') + 1);
  // mainColor = mainColor.substring(0, mainColor.indexOf(' ')).toLowerCase();
  let mainColor = '';
  let accentColor = '';
  if (style.name.indexOf('&') > -1) {
    mainColor = style.name.substring(0, style.name.indexOf('&')).trim(' ').toLowerCase();
    accentColor = style.name.substring(style.name.indexOf('&') + 1).trim(' ').toLowerCase();
    if (accentColor === 'white') {
      accentColor = '#E0E0E0';
    }
  } else {
    mainColor = style.name.trim(' ').toLowerCase();
  }
  const selected = style.name === currentStyle.name;
  // console.log(`${mainColor}<-main    accent->${accentColor}`);
  return (
    <StyledButton
      type="button"
      onClick={(e) => { onStyleChange(e, style); }}
      main={mainColor}
      accent={accentColor}
      selected={selected ? 'outset' : 'none'}
    />
  );
};

export default Style;
