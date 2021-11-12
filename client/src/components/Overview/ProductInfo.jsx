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

const ProductInfo = ({ info }) => (
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
    <Price>
      $
      {` ${info.default_price}`}
    </Price>
  </Info>

);

export default ProductInfo;
