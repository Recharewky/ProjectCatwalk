/* eslint-disable no-restricted-syntax */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */

import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import $ from 'jquery';
import AnOutfit from './anOutfit.jsx';
import Stars from '../Reviews/Styles.jsx';

const OutfitList = ({ currentProduct }) => {
  const listRef = useRef(null);
  const [allOutfitProducts, setOutfitList] = useState(localStorage.allOutfits
    ? [...JSON.parse(localStorage.allOutfits)]
    : []);
  const [addedAlready, setAdded] = useState(false);
  const [productCard, setCard] = useState([]);
  const showIcons = allOutfitProducts.length > 4;

  useEffect(() => {
    console.log('test');
    allOutfitProducts.includes(currentProduct) ? setAdded(true) : setAdded(false);
    $.ajax({
      method: 'POST',
      url: `/relatedProducts/postAProduct/${currentProduct}`,
      contentType: 'application/json',
      data: JSON.stringify({ currentProduct }),
      success: (success) => {
        let average = 0;
        let total = 0;
        let counter = 0;
        if (success.ratings.length !== 0) {
          // eslint-disable-next-line guard-for-in
          for (const key in success.ratings) {
            total += (Number(key) * Number(success.ratings[key]));
            counter += Number(success.ratings[key]);
          }
          average = total / counter;
        }
        if (!Number.isNaN(average)) {
          average = average.toString();
        } else {
          average = 'No ratings yet';
        }
        setCard([success.name, Number(success.default_price),
          success.photos[0].photos[0].thumbnail_url, average, success.category]);
      },
      error: (err) => console.log(err),
    });
  }, [currentProduct, setCard]);

  const scrollLeft = () => {
    if (listRef.current) {
      const visibleWidth = listRef.current.clientWidth;
      console.log(visibleWidth);
      const eachContainer = ((visibleWidth - 25)) / 4;
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
      const eachContainer = ((visibleWidth - 25)) / 4;
      listRef.current.scrollBy({
        top: 0,
        left: -eachContainer,
        behavior: 'smooth',
      });
    }
  };

  const addToOutfitList = (event, outfit) => {
    event.preventDefault();
    for (let i = 0; i < allOutfitProducts.length; i++) {
      if (allOutfitProducts[i] === outfit) {
        setAdded(true);
        console.log('i exist already');
        return;
      }
    }
    const temp = [outfit, ...allOutfitProducts];
    localStorage.allOutfits = JSON.stringify(temp);
    setOutfitList(temp);
    setAdded(true);
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

  const InnerContainer = styled.div`
  border: #1c9bef 0px;
  border-style: solid;
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  color: #5085A5;
  width: 18vw;
  height: 95%;
  border-radius: 5px;
  overflow: hidden;
  transition: 0.3s ease;
  border-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  & .categoryTitle {
    font-weight: 400;
    display: block;
    background-color: #5085A5;
    color: #F7F9FB;
    border: 0.1px solid;
    text-align: center;
    padding: 5px;
    cursor: pointer;
    position: relative;
    z-index: 2;
    width: 50%;
    top: -25px;
    left: 4vw;
  }
  & .details {
    display: flex;
    flex-direction: column;
    align-items: space-around;
    position: relative;
    top: -25px;
  }
  & .name {
    font-weight: 900;
  }
  & :hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    transform: translate(0, -20px);
    transform: scale(1.05);
  }

    & .content{
      position: absolute;
      top:-250px;
      left: 50%;
      padding: 10px;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      font-size: 20px;
      color: navy;
      white-space: nowrap;
      overflow: hidden
      }
      & .content a{
      font-size: 18px;
      display: block;
      background-color: #1c9bef;
      border: 0.1px solid;
      text-align: center;
      padding: 5px;
      cursor: pointer
      }
      & .overlay{
      opacity: 0;
      position: relative;
      display: none;
    }

    & :hover {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
  `;

  const removeOutfit = (event, outfitID) => {
    event.preventDefault();
    const outfitList = [...JSON.parse(localStorage.allOutfits)];
    const updatedOutfitList = outfitList.filter((item) => item !== outfitID);
    localStorage.allOutfits = JSON.stringify(updatedOutfitList);
    updatedOutfitList.includes(currentProduct) === false ? setAdded(false) : setAdded(true);
    setOutfitList(updatedOutfitList);
  };

  return (
    <StyledContainer>
      <ArrowLeft onClick={scrollRight}>
        <div className="-top" />
        <div className="-bottom" />
      </ArrowLeft>
      <Container ref={listRef}>
        <ButtonContainer>
          <InnerContainer style={{ opacity: addedAlready ? 0.1 : 0.5 }}>
            <div className="img">
              <Img className="image" alt="" src={productCard[2]} />
            </div>
            <div className="sample">
              <a className="categoryTitle">{productCard[4]}</a>
            </div>
            <div className="details">
              <RelatedProductsDetails>
                <div className="name">
                  {productCard[0]}
                </div>
              </RelatedProductsDetails>
              <RelatedProductsDetails>
                {productCard[1]}
                {' '}
                CAD
              </RelatedProductsDetails>
              <RelatedProductsDetails>
                <Stars rating={`${isNaN(productCard[3]) ? 0 : Math.round(productCard[3]) * 20}%`} />
                {isNaN(productCard[3]) ? productCard[3] : productCard[3].slice(0, 4)}
              </RelatedProductsDetails>
            </div>
          </InnerContainer>
          { addedAlready && (
            <div className="overlayText">
              <div className="description"> Outfit Added!</div>
            </div>
          )}
          { !addedAlready && (
            <div className="overlayText">
              <div className="description"> Love this look? Add to My Outfit!</div>
              <button className="addOutfitButton" onClick={(event) => addToOutfitList(event, currentProduct)}>ADD TO OUTFIT!</button>
            </div>
          )}
        </ButtonContainer>
        {allOutfitProducts.map((aProduct) => (
          <AnOutfit
            key={aProduct}
            aProduct={aProduct}
            currentProduct={currentProduct}
            removeOutfit={removeOutfit}
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
const RelatedProductsDetails = styled.div`
    font-size: 1em;
    padding: 2%;
    overflow: hidden;
    font-weight: 200;
    & .category {
      font-size: 0.8em;
      font-weight: normal;
    }

    & .name {
      font-size: 1.2em;
      font-weight: 500;
    }
  `;

const Img = styled.img`
    height: 300px;
    width: 18vw;
    object-fit: cover;
  `;

const slideIn = keyframes`
    0%{ margin-left: 100%; }
    50% { margin-left: 30%; }
    75% { margin-left: 10%; }
    100% { margin-left: 0%; }
`;

const ButtonContainer = styled.div`
    cursor: pointer;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    width: 30vw;
    padding: 1.5vw;
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
    font-weight: 900;
    color: #5085A5;
    animation: ${slideIn} 1s linear;

    & .overlayText {
      position: relative;
      & div {
        position: absolute;
        display: block;
        opacity: 1;
        text-transform: uppercase;
        left: 50%;
        transform: translate(-50%,-50%);
        top: -300px;
        width: 200px;
        text-align: center;
        overflow: hidden;
      }
      & button {
        width: 150px;
        left: 50%;
        padding: 5px;
        color: #F7F9FB;
        background-color: #31708E;
        transform: translate(-50%,-50%);
        top: -250px;
        position: relative;
      }
    }
  `;

const Container = styled.div`
  display: flex;
  overflow-y: hidden;
  width: 83.5vw;
  margin: 0px 4px 15px;
  padding: 20px 20px 80px 20px;

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
