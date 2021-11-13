/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';

// Colors to use
// Green:      #687864
// Dark blue   #31708E
// Medium blue #5085A5
// Light blue  #8FC1E3
// Off white   #F7F9FB

const SelectContainer = styled.div`
  grid-column: 2;
  grid-row: 4;
  margin-left: 15px;
  margin-top: 12px;
  display: grid;
  grid-template-rows: 10px 20px 20px;
  grid-template-columns: 100px 100px;
  gap: 10px;
`;

const SizeStyle = styled.select`
  grid-row: 2;
  grid-column: 1;
  background-color: #F7F9FB;
  color: #31708E;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  &:hover {
    transform: scale(1.05);
  }
`;

const AmountStyle = styled.select`
  grid-row: 2;
  grid-column: 2;
  background-color: #F7F9FB;
  color: #31708E;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  &:hover {
    transform: scale(1.05);
  }
`;

const CartStyle = styled.button`
  grid-row: 3;
  grid-column: 1;
  height: 40px;
  background-color: #31708E;
  color: #F7F9FB;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  &:hover {
    color: #31708E;
    background-color: #F7F9FB;
    transform: scale(1.05);
  }
`;

const SizeText = styled.div`
  grid-row: 1;
  grid-column: 1;
  font-size: 16px;
  color: #5085A5;
  `;

const AmtText = styled.div`
  grid-row: 1;
  grid-column: 2;
  font-size: 16px;
  color: #5085A5;
`;

const Selection = ({ currentStyle }) => {
  const [selectedSize, setSize] = useState('');
  const [selectedAmt, setAmt] = useState(1);
  const [amtEnabled, enableAmt] = useState(true);
  const [cartEnabled, enableCart] = useState(false);

  const amtOptions = [<option key="amt" value="amt" disabled>-</option>];
  const [availableAmt, setAmtList] = useState(amtOptions);

  const sizeOptions = [<option key="size" value="size" disabled>Select Size</option>];
  const stockPerSizes = [];
  const skus = Object.values(currentStyle.skus);
  let i;
  for (i = 0; i < skus.length; i += 1) {
    sizeOptions.push(<option key={i} value={skus[i].size}>{skus[i].size}</option>);
    stockPerSizes.push(skus[i].quantity);
  }

  const changeSize = (e) => {
    enableAmt(false);
    enableCart(true);
    const amountList = [];
    const choice = e.target.selectedIndex - 1;
    let max = stockPerSizes[choice];
    if (max > 15) {
      max = 15;
    }
    for (let j = 1; j <= max; j += 1) {
      amountList.push(<option key={j} value={j}>{j}</option>);
    }
    setSize(e.target.value);
    setAmtList(amountList);
  };

  return (
    <SelectContainer>
      <SizeText>Size</SizeText>
      <SizeStyle defaultValue="size" onChange={(e) => changeSize(e)}>
        {sizeOptions}
      </SizeStyle>
      <AmtText>Quantity</AmtText>
      <AmountStyle disabled={amtEnabled} defaultValue="amt" onChange={(e) => setAmt(e.target.value)}>
        {availableAmt}
      </AmountStyle>
      {cartEnabled && (
        <CartStyle type="button" onClick={() => console.log(`Adding to cart size ${selectedSize} x${selectedAmt}`)}>Add to Cart</CartStyle>)}
    </SelectContainer>
  );
};

export default Selection;
