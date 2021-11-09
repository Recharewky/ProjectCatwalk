/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */

import React, { useRef } from 'react';
import styled from 'styled-components';
import ARelatedProduct from './aRelatedProduct';
// import './style.scss';
// import PropTypes from 'prop-types';

const RelatedProductList = ({ allRelatedProducts }) => {
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
  const Container = styled.div`
      display: flex;
      overflow-y: hidden;
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
    `;

  const listRef = useRef(null);
  const showIcons = allRelatedProducts.length > 3;

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: 500,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: -500,
        behavior: 'smooth',
      });
    }
  };

  return (
    <StyledContainer>
      {showIcons && (
      <ArrowLeft onClick={scrollRight}>
        <div className="-top" />
        <div className="-bottom" />
      </ArrowLeft>
      )}
      <Container ref={listRef}>
        {allRelatedProducts.map((aProduct) => (
          <ARelatedProduct
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

// class RelatedProductList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {
//     const { allRelatedProducts } = this.props;
//     const Container = styled.div`
//       display: flex;
//       overflow-y: hidden;
//       margin: 0px 4px 15px;

//       &::-webkit-scrollbar {
//         display: none;
//       }
//     `;

//     const StyledContainer = styled.div`
//       display: flex;
//       max-width: 80rem;
//       overflow-y: auto;
//     `;

//     // const listRef = useRef(null);
//     // const showIcons = allRelatedProducts.length > 2;

//     // const scrollLeft = () => {
//     //   if (listRef.current) {
//     //     listRef.current.scrollBy({
//     //       top: 0,
//     //       left: 500,
//     //       behavior: 'smooth',
//     //     });
//     //   }
//     // };

//     // const scrollRight = () => {
//     //   if (listRef.current) {
//     //     listRef.current.scrollBy({
//     //       top: 0,
//     //       left: -500,
//     //       behavior: 'smooth',
//     //     });
//     //   }
//     // };

//     return (
//       <StyledContainer>
//         <Icon
//           className="icon-class"
//           name="caret left"
//           size="huge"
//         />
//         <Container>
//           {allRelatedProducts.map((aProduct) => (
//             <ARelatedProduct
//               key={aProduct}
//               aProduct={aProduct}
//             />
//           ))}
//         </Container>
//         <h2>TEST</h2>
//       </StyledContainer>
//     );
//   }
// }

export default RelatedProductList;