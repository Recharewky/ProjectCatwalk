/* eslint-disable react/prop-types */
import React from 'react';

const MainImage = ({ photos }) => (
  <img src={photos[0].url} alt="hi-res product" />
);

export default MainImage;
