/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
// import axios from 'axios';
import ProductInfo from './ProductInfo.jsx';
import StyleOptions from './StyleOptions.jsx';
import dummyData from '../../../../dummyData.js';

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
        ~This is where the overview would go~
        <div>
          Check out this cool product with id of
        </div>
        <div>
          {info.id}
        </div>
        Here is the sample data
        <ProductInfo info={info} />
        <div>
          Here are the styles you can choose from
          <StyleOptions
            styles={styles}
            currentStyle={currentStyle}
            onStyleChange={this.onStyleChange}
          />
        </div>
      </div>
    );
  }
}

export default Overview;
