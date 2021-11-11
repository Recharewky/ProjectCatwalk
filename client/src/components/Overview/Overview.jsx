/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';

// import axios from 'axios';
import styled from 'styled-components';
import ProductInfo from './ProductInfo.jsx';
import MainImage from './MainImage.jsx';
import StyleOptions from './StyleOptions.jsx';
import Description from './Description.jsx';
import Selection from './Selection.jsx';
import dummyData from '../../../../dummyData.js';

const OverviewContainer = styled.div`
  display: grid;
  grid-template-columns: 670px 400px;
  grid-template-rows: 30px 280px 140px 80px;
  border: solid black;
  width: 100%;
  gap: 30px;
`;

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: dummyData.product,
      styles: dummyData.styles,
      currentStyle: dummyData.styles.results[0],
    };

    this.onStyleChange = this.onStyleChange.bind(this);
  }

  onStyleChange(e, style) {
    this.setState({
      currentStyle: style,
    });
  }

  render() {
    const { info, styles, currentStyle } = this.state;
    return (
      <div>
        <OverviewContainer>
          <MainImage photos={currentStyle.photos} />
          <ProductInfo info={info} />
          <StyleOptions
            styles={styles}
            currentStyle={currentStyle}
            onStyleChange={this.onStyleChange}
          />
          <Selection currentStyle={currentStyle} />
        </OverviewContainer>
        <Description info={info} />
      </div>
    );
  }
}

export default Overview;
