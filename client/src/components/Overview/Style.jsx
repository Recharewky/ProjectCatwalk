/* eslint-disable react/prop-types */
import React from 'react';

const Style = ({ style, onStyleChange }) => (
  <button type="button" onClick={(e) => { onStyleChange(e, style); }}>
    {style.name}
  </button>
);

export default Style;
