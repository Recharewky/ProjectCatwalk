/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: cornflowerblue;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const ExpandedImage = styled.img`
  height: 90%;
  width: 90%;
  object-fit: cover;
  border-radius: 14px;
  border: 5px solid blue;
  background-color: gray;
  cursor: crosshair;
}
`;

const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border-color: aqua;
  color: black;
  background-color: white;
  font-weight: bolder;
  cursor: pointer;
`;
const ExpandedView = ({ showExpanded, setExpanded, imageToExpand }) => (
  // return (
  <>
    {showExpanded ? (
      <Background>
        <CloseButton onClick={setExpanded}>
          X
        </CloseButton>
        <ExpandedImage src={imageToExpand} />
      </Background>
    ) : null}
  </>
  // );
);

export default ExpandedView;
