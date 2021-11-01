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
    };
  }

  get() {
    return this;
  }

  render() {
    const { info, styles } = this.state;
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
          <StyleOptions styles={styles} />
        </div>
      </div>
    );
  }
}

export default Overview;
