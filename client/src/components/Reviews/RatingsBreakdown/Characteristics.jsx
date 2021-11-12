/* eslint-disable camelcase */
import React from 'react';
import FactorBar from './FactorBar.jsx';
import styled from 'styled-components';

const Chars_div = styled.div`
padding-top: 25px;
`;

const FactorBar_Containter = styled.div`
padding-bottom: 15px;
`;
var Characteristics = ({characteristics}) => {

  var charArray = Object.entries(characteristics);
  return (
    <Chars_div>
      <FactorBar_Containter>
        {charArray.map((char, index) =>
          <FactorBar
            key = {index}
            characteristic = {char}
          />
        )}
      </FactorBar_Containter>
    </Chars_div>
  );
};

export default Characteristics;
