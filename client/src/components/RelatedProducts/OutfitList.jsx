/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */

import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import AnOutfit from './anOutfit.jsx';

const OutfitList = ({ currentProduct }) => {
  const listRef = useRef(null);
  const [allOutfitProducts, setOutfitList] = useState(localStorage.allOutfits
    ? [...JSON.parse(localStorage.allOutfits)]
    : []);
  const [addedAlready, setAdded] = useState(false);
  const showIcons = allOutfitProducts.length > 3;

  const scrollLeft = () => {
    if (listRef.current) {
      const visibleWidth = listRef.current.clientWidth;
      console.log(visibleWidth);
      const eachContainer = ((visibleWidth)) / 4;
      listRef.current.scrollBy({
        top: 0,
        left: eachContainer,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      const visibleWidth = listRef.current.clientWidth;
      console.log(visibleWidth);
      const eachContainer = ((visibleWidth)) / 4;
      listRef.current.scrollBy({
        top: 0,
        left: -eachContainer,
        behavior: 'smooth',
      });
    }
  };

  const addToOutfitList = (event, outfit) => {
    event.preventDefault();
    console.log('Ive been clicked', outfit);
    for (let i = 0; i < allOutfitProducts.length; i++) {
      if (allOutfitProducts[i] === outfit) {
        setAdded(true);
        return;
      }
    }
    const temp = [outfit, ...allOutfitProducts];
    localStorage.allOutfits = JSON.stringify(temp);
    setOutfitList(temp);
  };
  const ArrowLeft = styled.div`
cursor: pointer;
height: 40px;
left: 50%;
position: center;
top: 50%;
transform: scale(-1,1);
transition: transform .1s;
width: 30px;
z-index: 1;
visibility: ${showIcons ? 'visible' : 'hidden'};

$transition-time: .15s;

& .-top,
& .-bottom {
  background-color: #1c9bef;
  height: 4px;
  left: -5px;
  position: absolute;
  top: 50%;
  width: 100%;

  & :after {
    background-color: #fff;
    content: '';
    height: 100%;
    position: absolute;
    top: 0;
    transition: all $transition-time;
  }
}

& .-top {
  transform: rotate(45deg);
  transform-origin: bottom right;

  & :after {
    left: 100%;
    right: 0;
    transition-delay: 0s;
  }
}

& .-bottom {
  transform: rotate(-45deg);
  transform-origin: top right;

  & :after {
    left: 0;
    right: 100%;
    transition-delay: $transition-time;
  }
}

& :hover & {

  & .-top:after {
    left: 0;
    transition-delay: $transition-time;
  }

  & .-bottom:after {
    right: 0;
    transition-delay: 0s;
  }
}

& :active {
  transform: scale(-.9, .9);
}
`;

  return (
    <StyledContainer>
      <ButtonContainer>
        <button onClick={(event) => addToOutfitList(event, currentProduct)}>ADD TO OUTFIT!</button>
      </ButtonContainer>
      <ArrowLeft onClick={scrollRight}>
        <div className="-top" />
        <div className="-bottom" />
      </ArrowLeft>
      <Container ref={listRef}>
        {allOutfitProducts.map((aProduct) => (
          <AnOutfit
            key={aProduct}
            aProduct={aProduct}
          />
        ))}
      </Container>
      {showIcons && (
      <ArrowRight onClick={scrollLeft}>
        <div className="-top" />
        <div className="-bottom" />
      </ArrowRight>
      )}
    </StyledContainer>
  );
};

const ArrowRight = styled.div`
cursor: pointer;
height: 40px;
left: 50%;
position: center;
top: 50%;
transform: scale(1,1);
transition: transform .1s;
width: 30px;
z-index: 1;

$transition-time: .15s;

& .-top,
& .-bottom {
  background-color: #1c9bef;
  height: 4px;
  left: -5px;
  position: absolute;
  top: 50%;
  width: 100%;

  & :after {
    background-color: #fff;
    content: '';
    height: 100%;
    position: absolute;
    top: 0;
    transition: all $transition-time;
  }
}

& .-top {
  transform: rotate(45deg);
  transform-origin: bottom right;

  & :after {
    left: 100%;
    right: 0;
    transition-delay: 0s;
  }
}

& .-bottom {
  transform: rotate(-45deg);
  transform-origin: top right;

  & :after {
    left: 0;
    right: 100%;
    transition-delay: $transition-time;
  }
}

& :hover & {

  & .-top:after {
    left: 0;
    transition-delay: $transition-time;
  }

  & .-bottom:after {
    right: 0;
    transition-delay: 0s;
  }
}

& :active {
  transform: scale(.9, .9);
}
`;
const ButtonContainer = styled.div`
  cursor: pointer;
  position: absolute;
  left: 0px;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  border: blue 5px;
  border-style: solid;
  width: 300px;
  height: 300px;
  padding: 20px
`;
const Container = styled.div`
  display: flex;
  overflow-y: hidden;
  width: 83.5vw;
  margin: 0px 4px 15px;
  padding: 80px 20px 80px 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledContainer = styled.div`
    display: flex;
    max-width: 100%;
    overflow-y: auto;
    align-items: center;
    justify-content: center;
  `;

export default OutfitList;
