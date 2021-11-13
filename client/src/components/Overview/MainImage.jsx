/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import ExpandedView from './ExpandedView.jsx';

// Colors to use
// Green:      #687864
// Dark blue   #31708E
// Medium blue #5085A5
// Light blue  #8FC1E3
// Off white   #F7F9FB

const Main = styled.img`
  height: 450px;
  width: 600px;
  object-fit: contain;
  border-radius: 5px;
  border: 3px solid #31708E;
  background-color: black;
  cursor: zoom-in;
  grid-column: 2;
  grid-row: 2 / span 2;
  border-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Thumbnail = styled.img`
  height: 3em;
  width: 3em;
  object-fit: cover;
  border-radius: 5px;
  border: 3px solid;
  background-color: black;
  border-color: ${(props) => props.selectedColor};
  cursor: pointer;
  border-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  & :hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 10px, rgba(0, 0, 0, 0.12) 0px -8px 10px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 10px 10px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    transform: scale(1.2);
  }
`;

const LeftArrow = styled.button`
  height: 3em;
  width: 3em;
  border: none;
  background-color: transparent;
  color: #687864;
  cursor: pointer;
  z-index: 3;
  grid-column: 1;
  grid-row: 3;
`;

const RightArrow = styled.button`
  height: 3em;
  width: 3em;
  border: none;
  background-color: transparent;
  color: #687864;
  cursor: pointer;
  z-index: 3;
  grid-column: 3;
  grid-row: 3;
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 5px;
  grid-column: 2;
  grid-row: 5;
  justify-self: center;
  align-self: end;
`;

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 35px 600px 35px;
  grid-template-rows: 50px 210px 35px 210px 60px;
  grid-column: 1;
  grid-row: 1 / span 4;
  grid-column-gap: 8px;
  width: 686px;
`;

const MainImage = ({ photos }) => {
  const [currentPhoto, setPhoto] = useState(0);
  const [leftArrowVisible, enableLeftArrow] = useState(false);
  const [rightArrowVisible, enableRightArrow] = useState(true);
  const [showExpanded, enableExpanded] = useState(false);

  let i = 0;
  const Thumbnails = [];
  const max = photos.length >= 7 ? 7 : photos.length;

  const setActivePhoto = (e) => {
    const id = Number(e.target.dataset.id);
    setPhoto(Number(id));
    if (id === 0) {
      enableLeftArrow(false);
      enableRightArrow(true);
    } else if (id === max - 1) {
      enableLeftArrow(true);
      enableRightArrow(false);
    } else {
      enableLeftArrow(true);
      enableRightArrow(true);
    }
  };

  for (i = 0; i < max; i += 1) {
    Thumbnails.push((
      <Thumbnail
        key={i}
        src={photos[i].thumbnail_url}
        data-id={i}
        selectedColor={i === currentPhoto ? '#8FC1E3' : ''}
        onClick={setActivePhoto}
      />
    ));
  }

  const setExpanded = () => {
    enableExpanded(!showExpanded);
  };

  const onLeftArrowClick = () => {
    if (currentPhoto > 0) {
      setPhoto(Number(currentPhoto - 1));
      if (!rightArrowVisible) {
        enableRightArrow(true);
      }
    }
    if (currentPhoto === 1) {
      enableLeftArrow(false);
    }
  };

  const onRightArrowClick = () => {
    if (currentPhoto < max - 1) {
      setPhoto(Number(currentPhoto + 1));
      if (!leftArrowVisible) {
        enableLeftArrow(true);
      }
    }
    if (currentPhoto === max - 2) {
      enableRightArrow(false);
    }
  };

  return (
    <MainContainer>
      {!showExpanded ? (
        <>
          <Gallery>
            {Thumbnails}
          </Gallery>
          <Main src={photos[currentPhoto].url} alt="hi-res product" onClick={setExpanded} />
          {leftArrowVisible
            && (
            <LeftArrow type="button" onClick={onLeftArrowClick}>
              <i className="fas fa-chevron-left fa-3x" />
            </LeftArrow>
            )}
          {rightArrowVisible
            && (
            <RightArrow type="button" onClick={onRightArrowClick}>
              <i className="fas fa-chevron-right fa-3x" />
            </RightArrow>
            )}
        </>
      ) : (
        <ExpandedView
          showExpanded={showExpanded}
          setExpanded={setExpanded}
          imageToExpand={photos[currentPhoto].url}
        />
      )}
    </MainContainer>
  );
};

export default MainImage;
