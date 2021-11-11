/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const DescStyle = styled.div`
  border: solid black;
`;

const Description = ({ info }) => {
  const featureList = [];
  let i = 0;
  for (i = 0; i < info.features.length; i += 1) {
    featureList.push(<li>{`${info.features[i].feature} | ${info.features[i].value}`}</li>);
  }

  return (
    <DescStyle>
      Description
      <div>
        {info.description}
      </div>
      <ul>
        Features
        {featureList}
      </ul>
    </DescStyle>
  );
};

export default Description;
