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
`;

const StyleOptions = ({ styles, currentStyle, onStyleChange }) => {
  const options = styles.results;

  return (
    <StylesContainer>
      <form>
        <legend>
          Style
          {'  >  '}
          {currentStyle.name}
        </legend>
        {/* Find a way to reflect the current style selected */}
        {options.map((style) => <Style style={style} onStyleChange={onStyleChange} />)}
      </form>
    </StylesContainer>
  );
};

export default StyleOptions;
