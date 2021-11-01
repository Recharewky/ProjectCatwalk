/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import Style from './Style.jsx';

const StyleOptions = ({ styles }) => {
  const options = styles.results;

  return (
    <div>
      {options.map((style) => <Style style={style} />)}
    </div>
  );
};

export default StyleOptions;
