/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */

import React from 'react';
import styled from 'styled-components';
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
    const Container = styled.div`
      display: flex;
      justify-content: space-around;
    `;
    return (
      <div>
        <h2>Related Products</h2>
        <Container>
          {allRelatedProducts.map((aProduct) => <ARelatedProduct aProduct={aProduct} />)}
        </Container>
      </div>
    );
  }
}

export default RelatedProductList;
