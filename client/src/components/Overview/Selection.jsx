/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Selection = ({ currentStyle }) => {
  const [selectedSize, setSize] = useState('');
  const [selectedAmt, setAmt] = useState(0);
  const [amtEnabled, enableAmt] = useState(true);

  const amtOptions = [<option value="amt" selected disabled>-</option>];
  const [availableAmt, setAmtList] = useState(amtOptions);

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
        const amountList = [];
        const choice = e.target.selectedIndex - 1;
        let max = stockPerSizes[choice];
        if (max > 15) {
          max = 15;
        }
        for (let j = 1; j <= max; j += 1) {
          amountList.push(<option value={j}>{j}</option>);
        }
        setSize(e.target.value);
        setAmtList(amountList);
      }}
      >
        {sizeOptions}
      </select>
      <select disabled={amtEnabled} onChange={(e) => setAmt(e.target.value)}>
        {availableAmt}
      </select>
      <div>
        {/* need to still add in BRD specs for add to cart button */}
        <button type="button" onClick={() => console.log(`Adding to cart size ${selectedSize} x${selectedAmt}`)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Selection;
