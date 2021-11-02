/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Selection = ({ currentStyle }) => {
  // const [selectedSize, setSize] = useState('Select Size');
  // const [selectedAmt, setAmt] = useState('-');
  const sizeOptions = [<option value="size" selected disabled>Select Size</option>];
  const amtOptions = [];
  const skus = Object.values(currentStyle.skus);
  let i;
  for (i = 0; i < skus.length; i += 1) {
    sizeOptions.push(<option value={skus[i].size}>{skus[i].size}</option>);
    amtOptions.push(<option value={skus[i].quantity}>{skus[i].quantity}</option>);
  }
  return (
    <div>
      <select>
        {sizeOptions}
      </select>
      <select disabled>
        {amtOptions}
      </select>
    </div>
  );
};

export default Selection;
