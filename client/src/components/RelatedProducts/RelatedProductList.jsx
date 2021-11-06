/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */

import React, { useRef } from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import ARelatedProduct from './aRelatedProduct';
// import PropTypes from 'prop-types';

const RelatedProductList = ({ allRelatedProducts }) => {
  const Container = styled.div`
      display: flex;
      overflow-y: hidden;
      margin: 0px 4px 15px;

      &::-webkit-scrollbar {
        display: none;
      }
    `;

  const StyledContainer = styled.div`
      display: flex;
      max-width: 80rem;
      overflow-y: auto;
    `;

  const listRef = useRef(null);
  const showIcons = allRelatedProducts.length > 2;

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
      <Icon
        className="icon-class"
        name="caret left"
        size="huge"
        onClick={scrollRight}
      >
        LEFT

      </Icon>
      <Container ref={listRef}>
        {allRelatedProducts.map((aProduct) => (
          <ARelatedProduct
            key={aProduct}
            aProduct={aProduct}
          />
        ))}
      </Container>
      {showIcons && (
      <Icon
        name="caret right"
        className="icon-class"
        size="huge"
        onClick={scrollLeft}
      >
        RIGHT
      </Icon>
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
