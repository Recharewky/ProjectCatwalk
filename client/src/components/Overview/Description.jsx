/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const DescContainer = styled.div`
  border: solid black;
  display: grid;
  grid-template-columns: 425px 200px;
  column-gap: 50px;
`;

const DescStyle = styled.div`
  grid-column: 1;
`;

const FeatureStyle = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  grid-column: 2;
`;

const Description = ({ info }) => {
  const featureList = [];
  let i = 0;
  for (i = 0; i < info.features.length; i += 1) {
    featureList.push(<li>{`${info.features[i].feature} | ${info.features[i].value}`}</li>);
  }

  return (
    <DescContainer>
      <DescStyle>
        <h3>
          Description
        </h3>
        {info.description}
      </DescStyle>
      <FeatureStyle>
        <h3>
          Features
        </h3>
        {featureList}
      </FeatureStyle>
    </DescContainer>
  );
};

export default Description;
