/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Style from './Style.jsx';

// Colors to use
// Green:      #687864
// Dark blue   #31708E
// Medium blue #5085A5
// Light blue  #8FC1E3
// Off white   #F7F9FB

const StylesContainer = styled.div`
  grid-column: 2;
  grid-row: 3;
  align-self: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 66%;
  margin-left: 15px;
`;

const StyleNameContainer = styled.legend`
  font-style: italic;
  font-weight: bolder;
  font-size: large;
  color: #31708E;
  margin-bottom: 3px;
`;

const StyleOptions = ({ styles, currentStyle, onStyleChange }) => {
  const options = styles.results;

  return (
    <StylesContainer>
      <form>
        <StyleNameContainer>
          Style
          {'  >  '}
          {currentStyle.name}
        </StyleNameContainer>
        {options.map((style) => (
          <Style
            key={style.name}
            style={style}
            onStyleChange={onStyleChange}
            currentStyle={currentStyle}
          />
        ))}
      </form>
    </StylesContainer>
  );
};

export default StyleOptions;
