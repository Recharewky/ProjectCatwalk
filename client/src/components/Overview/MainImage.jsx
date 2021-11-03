/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';

const Main = styled.img`
  height: 25em;
  width: 30em;
  object-fit: cover;
  border-radius: 14px;
  border: 5px solid orange;
}
`;

const Thumbnail = styled.img`
  height: 3em;
  width: 3em;
  object-fit: contain;
  border-radius: 5px;
  border: 3px solid blue;
  background-color: darkgray;
}
`;

const LeftArrow = styled.button`
  height: 3em;
  width: 3em;
  background-color: green;
  border-radius: 5px;
`;

const RightArrow = styled.button`
  height: 3em;
  width: 3em;
  background-color: green;
  border-radius: 5px;
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
`;

// const

const MainImage = ({ photos }) => {
  const [currentPhoto, setPhoto] = useState(0);

  const Thumbnails = photos.map((photo) => <Thumbnail src={photo.thumbnail_url} alt="thumbnail for product" />);

  return (
    <div>
      <Gallery>
        {Thumbnails}
      </Gallery>
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
