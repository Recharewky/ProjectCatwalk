/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React, {
  useState, useRef, useEffect, useCallback,
} from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Modal = (props) => {
  const { showModal } = props;
  const { compareProdName } = props;
  const { currentProductFeatures } = props;
  const { currentProductName } = props;
  const { changeProduct, currentProductID, compareProductID } = props;

  const compareFunc = () => {
    const { compareProdFeatures } = props;
    const setFeatures = {};
    const finalCompare = [];
    for (let i = 0; i < currentProductFeatures.length; i++) {
      setFeatures[currentProductFeatures[i].feature] = [currentProductFeatures[i].value];
    }
    /*
    map -> returns new array
    foreach -> alters something to each item in old array
      currentProductFeatures.map( (item) => {
        return(
          setFeatures
        )
      })
    */

    for (let i = 0; i < compareProdFeatures.length; i++) {
      if (setFeatures[compareProdFeatures[i].feature] === undefined) {
        setFeatures[compareProdFeatures[i].feature] = [undefined, compareProdFeatures[i].value];
      } else {
        setFeatures[compareProdFeatures[i].feature].push(compareProdFeatures[i].value);
      }
    }

    for (const key in setFeatures) {
      // console.log(key);
      // console.log(setFeatures);
      const arr = setFeatures[key];
      // console.log(arr);
      if (arr.length === 1) {
        finalCompare.push([true, `${key}: ${arr[0]}`, false]);
      } else if (arr[0] === arr[1]) {
        finalCompare.push([true, `${key}: ${arr[0]}`, true]);
      } else if (arr[0] === undefined) {
        finalCompare.push([false, `${key}: ${arr[1]}`, true]);
      } else {
        finalCompare.push([true, `${key}: ${arr[0]}`, false]);
        finalCompare.push([false, `${key}: ${arr[1]}`, true]);
      }
    }
    return finalCompare;
  };

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
                <h1>{currentProductName}</h1>
                {compareFunc().map((anItem) => (anItem[0]
                  ? (
                    <div>
                      {' '}
                      <i className="fas fa-check" />
                      {' '}
                    </div>
                  )
                  : <div> No </div>))}
                <button onClick={(event) => changeProduct(event, currentProductID)}>Read More</button>
              </ModalContent>
              <ModalContent>
                <h1>Description</h1>
                {compareFunc().map((anItem) =>
                  // eslint-disable-next-line no-unused-expressions
                  (<div>{anItem[1]}</div>))}
                <button className="hide">Hidden</button>
              </ModalContent>
              <ModalContent>
                <h1>{compareProdName}</h1>
                {compareFunc().map((anItem) =>
                  // eslint-disable-next-line no-unused-expressions
                  (anItem[2]
                    ? <div><i className="fas fa-check" /></div>
                    : <div> No </div>))}
                <button onClick={(event) => changeProduct(event, compareProductID)}>Read More</button>
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
width: 70vw;
height: 500px;
left: -35.5vw;
top: -28vh;
box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
background: #fff;
color: #000;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
position: absolute;
z-index: 10;
border-radius: 10px;

& i {
  padding: 4px;
}
`;

const ModalContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
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
  margin-top: 20px;
}

& .hide {
  visibility: hidden;
}
& h1 {
  top: 3rem;
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

export default Modal;
