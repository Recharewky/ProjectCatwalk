/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import $ from 'jquery';
import RelatedProductList from './RelatedProductList.jsx';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allRelatedProducts: [61579, 61580],
    };
  }

  componentDidMount() {
    const { id } = this.props;
    $.ajax({
      type: 'POST',
      url: `/relatedProducts/post/${id}`,
      contentType: 'application/json',
      data: JSON.stringify({ id }),
      success: (success) => {
        const successSet = new Set(success);
        const arr = Array.from(successSet); // duplicates
        this.setState(
          { allRelatedProducts: arr },
        );
      },
      error: (err) => console.log('error', err),
    });
  }

  render() {
    const { allRelatedProducts } = this.state;
    return (
      <div>
        <RelatedProductList allRelatedProducts={allRelatedProducts} />
      </div>
    );
  }
}

export default RelatedProducts;
