/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import Style from './Style.jsx';

const StyleOptions = ({ styles, currentStyle, onStyleChange }) => {
  const options = styles.results;

  return (
    <form>
      <legend>
        Style
        {'  >  '}
        {currentStyle.name}
      </legend>
      {/* Find a way to reflect the current style selected */}
      {options.map((style) => <Style style={style} onStyleChange={onStyleChange} />)}
    </form>
  );
};

export default StyleOptions;
