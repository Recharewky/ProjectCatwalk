/* eslint-disable react/prop-types */
import React from 'react';

const ProductInfo = ({ info }) => (
  <div>
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
  </div>

);

export default ProductInfo;
