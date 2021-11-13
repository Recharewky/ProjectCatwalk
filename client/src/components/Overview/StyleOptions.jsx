/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Style from './Style.jsx';

const StylesContainer = styled.div`
  grid-column: 2;
  grid-row: 3;
  border: solid black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 66%;
  margin-left: 15px;
  padding-left: 10px;
`;

const StyleNameContainer = styled.legend`
  font-style: italic;
  font-weight: bolder;
  font-size: large;
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
        {/* Find a way to reflect the current style selected */}
        {options.map((style) => (
          <Style
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
