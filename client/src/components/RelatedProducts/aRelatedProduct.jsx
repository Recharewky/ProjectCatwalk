/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
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
      photos: '',
      averageRating: '',
      category: '',
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
        let average = 0;
        let total = 0;
        let counter = 0;
        if (success.ratings.length !== 0) {
          for (const key in success.ratings) {
            total += (Number(key) * Number(success.ratings[key]));
            counter += Number(success.ratings[key]);
          }
          // console.log('total', total);
          // console.log('counter', counter);
          average = total / counter;
        }
        if (!Number.isNaN(average)) {
          average = average.toString();
        } else {
          average = 'No ratings yet';
        }
        this.setState(
          {
            name: success.name,
            price: Number(success.default_price),
            description: success.description,
            photos: success.photos[0].photos[0].url,
            averageRating: average,
            category: success.category,
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
    const { averageRating } = this.state;
    const { photos } = this.state;
    const { category } = this.state;
    return (
      <div>
        <div>
          Category:
          {category}
        </div>
        <div>
          Name:
          {name}
        </div>
        <div>
          Price:
          {price}
          {' '}
          USD
        </div>
        <div>
          Description:
          {description}
        </div>
        <div>
          Rating:
          {averageRating}
        </div>
        <div className="img">
          Image:
          <img className="image" alt="" src={photos} />
        </div>
      </div>
    );
  }
}

export default ARelatedProduct;
