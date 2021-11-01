/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
// import axios from 'axios';
import ProductInfo from './ProductInfo.jsx';
import dummyData from '../../../../dummyData.js';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      info: dummyData.product,
    };
  }

  get() {
    return this;
  }

  render() {
    const { id } = this.props;
    const { info } = this.state;
    return (
      <div>
        ~This is where te overview would go~
        Check out this cool product with id of
        {id}
        Here is the sample data
        <ProductInfo info={info} />
      </div>
    );
  }
}

export default Overview;
