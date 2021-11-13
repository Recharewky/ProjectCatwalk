/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const DescContainer = styled.div`
  display: grid;
  grid-template-columns: 425px 350px;
  column-gap: 40px;
  margin-top: 25px;
  margin-left: 75px;
  color: #31708E;
`;

const DescStyle = styled.div`
  grid-column: 1;
`;

const FeatureStyle = styled.ul`
  list-style-type: none;
  padding-left: 10;
  margin: 0;
  grid-column: 2;
  border-left: solid;
  border-color: #687864;
  line-height: 1.25;
`;

const StyledTitle = styled.h3`
  font-style: oblique;
  font-weight: bold;
  text-decoration-line: underline overline;
`;

const StyledDescriptionText = styled.div`
  font-style: oblique;
  text-align: justify;
  line-height: 1.5;
`;

const Check = styled.i`
  color: #8FC1E3;
`;

const Description = ({ info }) => {
  // const featureList = [];
  // let i = 0;
  // for (i = 0; i < info.features.length; i += 1) {
  //   featureList.push(<li>{`${info.features[i].feature} | ${info.features[i].value}`}</li>);
  // }

  // when the fontawesome link is included make an icon for each feature
  const featureList = info.features.map((feature) => (
    <li key={feature.feature}>
      <Check className="far fa-check-circle" />
      <span>{`  ${feature.feature}  |  ${feature.value}`}</span>
    </li>
  ));

  return (
    <DescContainer>
      <DescStyle>
        <StyledTitle>
          {info.slogan}
        </StyledTitle>
        <StyledDescriptionText>
          {info.description}
        </StyledDescriptionText>
      </DescStyle>
      <FeatureStyle>
        <StyledTitle>
          Features
        </StyledTitle>
        {featureList}
      </FeatureStyle>
    </DescContainer>
  );
};

export default Description;
