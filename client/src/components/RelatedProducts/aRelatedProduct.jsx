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
      data: JSON.stringify({ aProduct }),
      success: (success) => {
        console.log(success);
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

    const RelatedProductsDetails = styled.div`
    font-size: 1em;
    text-align: center;
    padding: 0.5em;
    overflow: hidden;
  `;

    const Img = styled.img`
    height: 300px;
    width: 300px;
    object-fit: cover;
  `;

    const Container = styled.div`
    cursor: pointer;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    width: 300px;
    padding: 20px
  `;

    const InnerContainer = styled.div`
    border: #1c9bef 3px;
    border-style: solid;
    border-radius: 20px;
    overflow: hidden;
  `;

    return (
      <Container>
        <InnerContainer>
          <div className="img">
            <Img className="image" alt="" src={photos} />
          </div>
          <RelatedProductsDetails>
            Category:
            {' '}
            {category}
          </RelatedProductsDetails>
          <RelatedProductsDetails>
            Name:
            {' '}
            {name}
          </RelatedProductsDetails>
          <RelatedProductsDetails>
            Price:
            {' '}
            {price}
            {' '}
            CAD
          </RelatedProductsDetails>
          <RelatedProductsDetails>
            Rating:
            {' '}
            {averageRating}
          </RelatedProductsDetails>
        </InnerContainer>
      </Container>
    );
  }
}

export default ARelatedProduct;
// display: flex;
// justify-content: space-between;
// align-items: flex-start;
// flex-direction: column;
// width: 300px;
// border: #1c9bef 3px;
// border-style: solid;
// border-radius: 20px;
// overflow: hidden;
