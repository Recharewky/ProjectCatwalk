/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

// Colors to use
// Green:      #687864
// Dark blue   #31708E
// Medium blue #5085A5
// Light blue  #8FC1E3
// Off white   #F7F9FB

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  position: absolute;
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #8FC1E344;
  position: fixed;
  z-index: 45;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;

`;

const ExpandedImage = styled.img`
  height: 85%;
  width: 85%;
  object-fit: cover;
  border-radius: 5px;
  background-color: gray;
  cursor: crosshair;
  z-index: 50;
  border-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
`;

const CloseButton = styled.button`
  color: #8FC1E3;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 660px;
  right: 130px;
  z-index: 51;
`;
const ExpandedView = ({ showExpanded, setExpanded, imageToExpand }) => (
  // return (
  <>
    {showExpanded && (
      <Modal>
        <Background onClick={setExpanded}>
          <CloseButton onClick={setExpanded}>
            <i className="far fa-times-circle fa-4x" />
          </CloseButton>
          <ExpandedImage src={imageToExpand} />
        </Background>

      </Modal>
    )}
  </>
  // );
);

export default ExpandedView;
