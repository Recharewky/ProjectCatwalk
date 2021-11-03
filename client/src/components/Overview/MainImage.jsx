/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';

const MainImage = ({ photos }) => {
  const [currentPhoto, setPhoto] = useState(0);

  const Main = styled.img`
    height: 25em;
    width: 30em;
    object-fit: cover;
  `;

  const LeftArrow = styled.button`
    height: 5em;
    width: 5em;
    background-color: white;
  `;

  const RightArrow = styled.button`
    height: 5em;
    width: 5em;
    background-color: white;
  `;

  return (
    <div>
      <Main src={photos[currentPhoto].url} alt="hi-res product" />
      <LeftArrow
        type="button"
        onClick={() => {
          if (currentPhoto > 0) {
            setPhoto(currentPhoto - 1);
          }
        }}
      >
        {'<'}
      </LeftArrow>
      <RightArrow
        type="button"
        onClick={() => {
          if (currentPhoto < photos.length - 1) {
            setPhoto(currentPhoto + 1);
          }
        }}
      >
        {'>'}
      </RightArrow>
    </div>
  );
};

export default MainImage;
