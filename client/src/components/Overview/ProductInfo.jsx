/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Info = styled.div`
  background-color: darkseagreen;
  grid-column: 2;
  grid-row: 2;
`;

const ProductInfo = ({ info }) => (
  <Info>
    <div>
      {info.category}
    </div>
    <h2>
      {info.name}
    </h2>
    <h6>
      {info.slogan}
    </h6>
    <div>
      $
      {` ${info.default_price}`}
    </div>
  </Info>

);

export default ProductInfo;
