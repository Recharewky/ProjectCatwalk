/* eslint-disable react/prop-types */
import React from 'react';

const Style = ({ style }) => (
  <div>
    {style.name}
    Thumbnail
    <button type="button">
      <img src={style.photos[0].thumbnail_url} alt="low resolution identifier for new style" />
    </button>
    Actual photo to display
    <img src={style.photos[0].url} alt="high resolution display of product in a certain style" />
  </div>
);

export default Style;
