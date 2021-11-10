/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Info = styled.div`
  flex-basis: 30%;
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
