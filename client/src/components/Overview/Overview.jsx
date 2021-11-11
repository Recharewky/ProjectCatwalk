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
  display: inline-flex;
  background-color: papayawhip;
  width: 100%;
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
          <div>
            <ProductInfo info={info} />
            <StyleOptions
              styles={styles}
              currentStyle={currentStyle}
              onStyleChange={this.onStyleChange}
            />
          </div>
          <div>
            <Selection currentStyle={currentStyle} />
          </div>
        </OverviewContainer>
        <Description info={info} />
      </div>
    );
  }
}

export default Overview;
