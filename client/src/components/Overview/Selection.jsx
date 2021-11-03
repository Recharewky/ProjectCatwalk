/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Selection = ({ currentStyle }) => {
  // const [selectedSize, setSize] = useState('Select Size');
  const [amtEnabled, enableAmt] = useState(true);

  const amtOptions = [<option value="amt" selected disabled>-</option>];
  const [availableAmt, setAmt] = useState(amtOptions);

  const sizeOptions = [<option value="size" selected disabled>Select Size</option>];
  const stockPerSizes = [];
  const skus = Object.values(currentStyle.skus);
  let i;
  for (i = 0; i < skus.length; i += 1) {
    sizeOptions.push(<option value={skus[i].size}>{skus[i].size}</option>);
    stockPerSizes.push(skus[i].quantity);
  }
  return (
    <div>
      <select onChange={(e) => {
        enableAmt(false);
        console.log(e.target.selectedIndex - 1);
        console.log(stockPerSizes[e.target.selectedIndex - 1]);
        const amountList = [];
        const choice = e.target.selectedIndex - 1;
        let max = stockPerSizes[choice];
        if (max > 15) {
          max = 15;
        }
        for (let j = 1; j <= max; j += 1) {
          amountList.push(<option value={j}>{j}</option>);
        }
        setAmt(amountList);
      }}
      >
        {sizeOptions}
      </select>
      <select disabled={amtEnabled}>
        {availableAmt}
      </select>
    </div>
  );
};

export default Selection;
