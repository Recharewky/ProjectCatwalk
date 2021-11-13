/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Star from '../Reviews/Styles.jsx';

//  display: grid;
// grid-template-rows: 30px 50px 80px 25px 50px;
// grid-template-columns: 150px 250px;

// Colors to use
// Green:      #687864
// Dark blue   #31708E
// Medium blue #5085A5
// Light blue  #8FC1E3
// Off white   #F7F9FB

const Info = styled.div`
  grid-column: 2;
  grid-row: 2;
  display: grid;
  grid-template-rows: 100px 120px;
  row-gap: 10px;
  margin-left: 15px;
`;

const StarCat = styled.div`
  grid-row: 1;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const NamePrice = styled.div`
  grid-row: 2;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const Category = styled.div`
  font-weight: bolder;
  font-size: 22px;
  grid-row: 2;
  grid-column: 1;
  align-self: start;
  justify-self: left;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #31708E;
  color: #F7F9FB;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

  &:hover {
    transform: scale(1.05);
    color: #31708E;
    background-color: #F7F9FB;
  }
`;

const ProductName = styled.div`
  font-size: 44px;
  font-weight: bolder;
  grid-row: 3;
  grid-column: 1 / span2;
`;

const Slogan = styled.div`
  font-size: 12px;
  font-style: oblique;
  color: #5085A5;
  grid-row: 4;
  grid-column: 1 / span2;
`;

const Price = styled.div`
  font-size: 22px;
  color: #31708E;
  grid-row: 5;
  grid-column: 1 / span2;
`;

const SaleDisplay = styled.div`
  text-decoration-line: line-through;
  color: darkred;
  font-style: oblique;
  font-size: 16px;
  display: inline;
`;

const PercentageContainer = styled.div`
  font-size: 14px;
  font-style: oblique;
  color: red;
`;

const StarContainer = styled.div`
  grid-row: 1;
  grid-column: 1;
  align-self: start;
`;

const ProductInfo = ({ info, originalPrice, salePrice }) => {
  const sale = <SaleDisplay>{originalPrice}</SaleDisplay>;
  const percentage = 100 - Math.floor((salePrice / originalPrice) * 100);

  return (
    <Info>
      <StarCat>
        <StarContainer>
          <Star />
        </StarContainer>
        <Category>
          {info.category}
        </Category>
      </StarCat>
      <NamePrice>
        <ProductName>
          {info.name}
        </ProductName>
        <Slogan>
          {info.slogan}
        </Slogan>
        <Price onSale={salePrice !== null}>
          {salePrice && (
            <PercentageContainer>{`On Sale! ~${percentage}% off!`}</PercentageContainer>
          )}
          $
          {salePrice ? ` ${salePrice}     ` : ` ${originalPrice}`}
          {salePrice ? sale : null}
        </Price>
      </NamePrice>
    </Info>
  );
};

export default ProductInfo;
