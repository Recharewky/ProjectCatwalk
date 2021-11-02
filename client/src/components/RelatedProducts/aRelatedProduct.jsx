/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */

import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';

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
            photos: success.photos[0].photos[0].thumbnail_url,
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
    // const { description } = this.state;
    const { averageRating } = this.state;
    const { photos } = this.state;
    const { category } = this.state;

    const Title = styled.div`
    font-size: 1 em;
    text-align: center;
    color: palevioletred;
  `;

    const Img = styled.img`
    height: 300px;
    width: 300px;
    object-fit: cover;
  `;

    const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    width: 300px;
    border: blue 5px;
    border-style: solid;
    border-radius: 20px;
    overflow: hidden;
  `;

    return (
      <Container>
        <div className="img">
          <Img className="image" alt="" src={photos} />
        </div>
        <div>
          Category:
          {' '}
          {category}
        </div>
        <div>
          Name:
          {' '}
          {name}
        </div>
        <div>
          Price:
          {' '}
          {price}
          {' '}
          CAD
        </div>
        <div>
          Rating:
          {' '}
          {averageRating}
        </div>
      </Container>
    );
  }
}

export default ARelatedProduct;
