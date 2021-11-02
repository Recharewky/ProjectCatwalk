/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */

import React from 'react';
import ARelatedProduct from './aRelatedProduct';
// import PropTypes from 'prop-types';

class RelatedProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { allRelatedProducts } = this.props;
    return (
      <div>
        <h2> This is the start of the related products </h2>
        {allRelatedProducts.map((aProduct) => <ARelatedProduct aProduct={aProduct} />)}
      </div>
    );
  }
}

export default RelatedProductList;
