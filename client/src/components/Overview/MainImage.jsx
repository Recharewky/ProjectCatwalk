/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';

const Main = styled.img`
  height: 450px;
  width: 600px;
  object-fit: contain;
  border-radius: 14px;
  border: 5px solid orange;
  background-color: black;
  cursor: zoom-in;
}
`;

const Thumbnail = styled.img`
  height: 3em;
  width: 3em;
  object-fit: contain;
  border-radius: 5px;
  border: 3px solid;
  background-color: darkgray;
  border-color: ${(props) => props.selectedColor};
  cursor: pointer;
}
`;

const LeftArrow = styled.button`
  height: 3em;
  width: 3em;
  background-color: green;
  border-radius: 5px;
  cursor: pointer;
  z-index: 3;
`;

const RightArrow = styled.button`
  height: 3em;
  width: 3em;
  background-color: green;
  border-radius: 5px;
  cursor: pointer;
  z-index: 3;
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: row;
`;

const MainContainer = styled.div`
  display: flex;
`;

const MainImage = ({ photos }) => {
  const [currentPhoto, setPhoto] = useState(0);
  const [leftArrowVisible, enableLeftArrow] = useState(false);
  const [rightArrowVisible, enableRightArrow] = useState(true);
  const [showExpanded, enableExpanded] = useState(false);

  let i = 0;
  const Thumbnails = [];
  for (i = 0; i < photos.length; i += 1) {
    Thumbnails.push((
      <Thumbnail
        key={i}
        src={photos[i].thumbnail_url}
        data-id={i}
        selectedColor={i === currentPhoto ? 'red' : ''}
        onClick={(e) => {
          const id = Number(e.target.dataset.id);
          setPhoto(Number(id));
          if (id === 0) {
            enableLeftArrow(false);
            enableRightArrow(true);
          } else if (id === photos.length - 1) {
            enableLeftArrow(true);
            enableRightArrow(false);
          } else {
            enableLeftArrow(true);
            enableRightArrow(true);
          }
        }}
      />
    ));
  }

  const setExpanded = () => {
    enableExpanded(!showExpanded);
  };

  return (
    <MainContainer>
      <Gallery>
        {Thumbnails}
      </Gallery>
      <Main src={photos[currentPhoto].url} alt="hi-res product" onClick={setExpanded} />
      {leftArrowVisible
        && (
        <LeftArrow
          type="button"
          onClick={() => {
            if (currentPhoto > 0) {
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
      {showExpanded ? <div>Expanded View should go here!</div> : null}
    </MainContainer>
  );
};

export default MainImage;

// create expanded modal compoent and conditionally render that,
// pass props as state/setter with set modal as well as current image / thumbnails?
// Change modal to modal to following styling in video
// make neccesary background/ wrapper styled components as needed for modal
// dont focus on making a scrollable gallery yet
// allow for click on the background to close the expanded view modal

// next steps => allow for on click of the main image in the modal to zoom in
