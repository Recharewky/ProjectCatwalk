/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */

import React from 'react';
import $ from 'jquery';

class ARelatedProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: 0,
      description: '',
    };
  }

  componentDidMount() {
    const { aProduct } = this.props;
    $.ajax({
      method: 'POST',
      url: `/relatedProducts/postAProduct/${aProduct}`,
      contentType: 'application/json',
      data: JSON.stringify(aProduct),
      success: (success) => {
        this.setState(
          {
            name: success.name,
            price: Number(success.default_price),
            description: success.description,
          },
        );
      },
      error: (err) => console.log(err),
    });
  }

  render() {
    const { name } = this.state;
    const { price } = this.state;
    const { description } = this.state;
    return (
      <div>
        <div>
          Name:
          {name}
        </div>
        <div>
          Price:
          {price}
        </div>
        <div>
          Description:
          {description}
        </div>
      </div>
    );
  }
}

export default ARelatedProduct;
