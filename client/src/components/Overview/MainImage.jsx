/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Main = styled.img`
  height: 450px;
  width: 600px;
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
  border: 3px solid;
  background-color: darkgray;
  border-color: ${(props) => props.isCurrentPhoto}
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

const MainContainer = styled.div`
  display: flex;
`;

const MainImage = ({ photos }) => {
  const [currentPhoto, setPhoto] = useState(0);
  const [prevPhoto, deselectPhoto] = useState(null);
  const [leftArrowVisible, enableLeftArrow] = useState(false);
  const [rightArrowVisible, enableRightArrow] = useState(true);

  let i = 0;
  const Thumbnails = [];
  for (i = 0; i < photos.length; i += 1) {
    Thumbnails.push((
      <Thumbnail
        key={i}
        src={photos[i].thumbnail_url}
        data-id={i}
        onClick={(e) => {
          setPhoto(Number(e.target.dataset.id));
          deselectPhoto(e.target);
          if (prevPhoto) {
            prevPhoto.style.borderColor = '';
          }
          e.target.style.borderColor = 'red';
        }}
      />
    ));
  }

  // Try and add a galleryElement component with state/props that
  // the Thumbnail styled component is based off
  // this component can have a state indicating whether it is active
  // and return? a styled component with a passed in prop as the state?

  useEffect(() => {
    document.title = `${currentPhoto}`;
  });

  return (
    <MainContainer>
      <Gallery>
        {Thumbnails}
      </Gallery>
      <Main src={photos[currentPhoto].url} alt="hi-res product" />
      {leftArrowVisible
        && (
        <LeftArrow
          type="button"
          onClick={() => {
            if (currentPhoto > 0) {
              console.log(Thumbnails[currentPhoto]);
              setPhoto(Number(currentPhoto - 1));
              if (!rightArrowVisible) {
                enableRightArrow(true);
              }
            }
            if (currentPhoto === 1) {
              enableLeftArrow(false);
            }
          }}
        >
          {'<'}
        </LeftArrow>
        )}
      {rightArrowVisible
        && (
        <RightArrow
          type="button"
          onClick={() => {
            if (currentPhoto < photos.length - 1) {
              setPhoto(Number(currentPhoto + 1));
              if (!leftArrowVisible) {
                enableLeftArrow(true);
              }
            }
            if (currentPhoto === photos.length - 2) {
              enableRightArrow(false);
            }
          }}
        >
          {'>'}
        </RightArrow>
        )}
    </MainContainer>
  );
};

export default MainImage;
