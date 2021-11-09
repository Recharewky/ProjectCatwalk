/* eslint-disable react/prop-types */
import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  top: 0px;
  left: 0px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 50vw;
  height: 500px;
  left: -44rem;
  top: -15rem;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  position: absolute;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  div {
    padding: 4px;
    margin: 0px;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }

  & .fas.fa-check {
    color: navy;
    transform: scale(1.5);
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;

  & :hover {
    transform: scale(1.1, 1.1);
  }

  & :active {
    transform: scale(-0.9, 0.9);
  }
`;

const Modal = (props) => {
  const { showModal } = props;
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? 'translateY(0%)' : 'translateY(-100%)',
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      props.openModal();
    }
  };

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <h1>Product 1</h1>
                <i className="fas fa-check" />
                <div />
                <i className="fas fa-check" />
              </ModalContent>
              <ModalContent>
                <h1>Description</h1>
                <div>Item 1 Comparison</div>
                <div>Item 2 Comparison</div>
              </ModalContent>
              <ModalContent>
                <h1>Product 2</h1>
                <p>Get exclusive access to our next launch.</p>
                <button>Read More</button>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => props.openModal()}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>

  );
};

export default Modal;
