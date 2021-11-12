/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Info = styled.div`
  border: solid black;
  grid-column: 2;
  grid-row: 2;
  display: grid;
  grid-template-rows: 60px 90px 25px 60px;
  grid-template-columns: 150px 250px;
  row-gap: 15px;
  margin-left: 15px;
`;

const Category = styled.div`
  font-weight: bolder;
  font-size: 22px;
  grid-row: 1;
  grid-column: 1;
  align-self: center;
  justify-self: left;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 10px;
  background-color: darkgray;
  color: white;
  border-radius: 25px;
  cursor: pointer;

  &:hover {
    color: black;
    background-color: cornflowerblue;
  }
`;

const ProductName = styled.div`
  font-size: 44px;
  font-weight: bolder;
  grid-row: 2;
  grid-column: 1 / span2;
  padding-left: 10px;
`;

const Slogan = styled.div`
  font-size: 12px;
  font-style: oblique;
  font-color: lightgray;
  grid-row: 3;
  grid-column: 1 / span2;
  padding-left: 10px;
`;

const Price = styled.div`
  font-size: 22px;
  grid-row: 4;
  grid-column: 1 / span2;
  padding-left: 10px;
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

const ProductInfo = ({ info, originalPrice, salePrice }) => {
  const sale = <SaleDisplay>{originalPrice}</SaleDisplay>;
  const percentage = 100 - Math.floor((salePrice / originalPrice) * 100);

  return (
    <Info>
      <Category>
        {info.category}
      </Category>
      <ProductName>
        {info.name}
      </ProductName>
      <Slogan>
        {info.slogan}
      </Slogan>
      <Price onSale={salePrice !== null}>
        {salePrice ? (
          <PercentageContainer>{`On Sale! ~${percentage}% off!`}</PercentageContainer>
        ) : null}
        $
        {salePrice ? ` ${salePrice}     ` : ` ${originalPrice}`}
        {salePrice ? sale : null}
      </Price>
    </Info>
  );
};

export default ProductInfo;
