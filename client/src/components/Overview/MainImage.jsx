/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';

const Main = styled.img`
  height: 420px;
  width: 500px;
  object-fit: contain;
  border-radius: 14px;
  border: 5px solid orange;
  background-color: black;
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
  position: relative;
  top: 190px;
  right: 490px;
`;

const RightArrow = styled.button`
  height: 3em;
  width: 3em;
  background-color: green;
  border-radius: 5px;
  position: relative;
  top: 190px;
  right: 100px;
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.div`
  display: flex;
  position: relative;
`;

const MainImage = ({ photos }) => {
  const [currentPhoto, setPhoto] = useState(0);

  let i = 0;
  const Thumbnails = [];
  for (i = 0; i < photos.length; i += 1) {
    Thumbnails.push((
      <Thumbnail
        src={photos[i].thumbnail_url}
        data-id={i}
        onClick={(e) => {
          setPhoto(Number(e.target.dataset.id));
        }}
      />
    ));
  }
  // const Thumbnails = photos.map((photo) => (
  //   <Thumbnail
  //     src={photo.thumbnail_url}
  //     onClick={(e) => console.log(e)}
  //   />
  // ));

  return (
    <MainContainer>
      <Gallery>
        {Thumbnails}
      </Gallery>
      <Main src={photos[currentPhoto].url} alt="hi-res product" />
      <LeftArrow
        type="button"
        onClick={() => {
          if (currentPhoto > 0) {
            setPhoto(Number(currentPhoto - 1));
          }
        }}
      >
        {'<'}
      </LeftArrow>
      <RightArrow
        type="button"
        onClick={() => {
          if (currentPhoto < photos.length - 1) {
            setPhoto(Number(currentPhoto + 1));
          }
        }}
      >
        {'>'}
      </RightArrow>
    </MainContainer>
  );
};

export default MainImage;
