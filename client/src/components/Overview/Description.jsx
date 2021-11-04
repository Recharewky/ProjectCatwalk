/* eslint-disable react/prop-types */
import React from 'react';

const Description = ({ info }) => {
  const featureList = [];
  let i = 0;
  for (i = 0; i < info.features.length; i += 1) {
    featureList.push(<li>{`${info.features[i].feature} | ${info.features[i].value}`}</li>);
  }

  return (
    <div>
      Description
      <div>
        {info.description}
      </div>
      <ul>
        Features
        {featureList}
      </ul>
    </div>
  );
};

export default Description;
