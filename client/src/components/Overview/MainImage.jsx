/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const MainImage = ({ photos }) => {
  const Main = styled.img`
    height: 25em;
    width: 30em;
    object-fit: cover;
  `;

  return (
    <Main src={photos[0].url} alt="hi-res product" />
  );
};

export default MainImage;
