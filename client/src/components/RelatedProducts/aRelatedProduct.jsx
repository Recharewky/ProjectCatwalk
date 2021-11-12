/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */

import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import Modal from './Modal.jsx';
import Stars from '../Reviews/Styles.jsx';

class ARelatedProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: 0,
      features: [],
      photos: '',
      averageRating: '',
      category: '',
      showModal: false,
    };
    this.openModal = this.openModal.bind(this);
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
            features: success.features,
            photos: success.photos[0].photos[0].thumbnail_url,
            averageRating: average,
            category: success.category,
          },
        );
      },
      error: (err) => console.log(err),
    });
  }

  openModal() {
    this.setState(
      { showModal: !this.state.showModal },
    );
  }

  render() {
    const { name } = this.state;
    const { price } = this.state;
    // const { description } = this.state;
    const { averageRating } = this.state;
    const { photos } = this.state;
    const { category } = this.state;
    const { showModal } = this.state;
    const { features } = this.state;
    const { currentProduct } = this.props;

    const RelatedProductsDetails = styled.div`
    font-size: 1em;
    padding: 2%;
    overflow: hidden;
    font-weight: 200;
    & .category {
      font-size: 0.8em;
      font-weight: normal;

    }

    & .name {
      font-size: 1.2em;
      font-weight: 500;
    }
  `;

    const Img = styled.img`
    height: 300px;
    width: 18vw;
    object-fit: cover;
  `;

    const Container = styled.div`
    cursor: pointer;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    width: 30vw;
    padding: 1.5vw

  `;

    const InnerContainer = styled.div`
    border: #1c9bef 2px;
    border-style: solid;
    width: 18vw;
    height: 95%;
    border-radius: 10px;
    overflow: hidden;
    transition: 0.3s ease;
    border-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    & .categoryTitle {
      font-size: 18px;
      display: block;
      background-color: #1c9bef;
      border: 0.1px solid;
      text-align: center;
      padding: 5px;
      cursor: pointer;
      position: relative;
      z-index: 2;
      width: 50%;
      top: -25px;
      left: 4vw;
    }
    & .details {
      display: flex;
      flex-direction: column;
      align-items: space-around;
      position: relative;
      top: -25px;
    }
    & .content{
      position: absolute;
      top:-300px;
      left: 50%;
      padding: 10px;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      font-size: 20px;
      color: navy;
      white-space: nowrap;
      overflow: hidden
      }
      & .overlay{
      opacity: 0;
      position: relative;
      display: none;
    }
    & :hover img{
      background-color: #fff;
      transition: .3s ease;
      opacity: .3
    }
    & :hover .overlay{
      opacity: 1;
      position: relative;
      display: block;
      }
    & :hover .content {
      padding: 30px;
      margin-top: 30px;
      margin-bottom: 30px;
    }
    & :hover .sample {
      transition: all .3s ease-in-out;
      transition-delay: 0.1s;
      transform: translate(0, -75px);
    }

    & .categoryTitle:after {
      content: '${category}';
    }

    & :hover .categoryTitle:after {
      content: 'Compare';
    }

    & :active .categoryTitle {
      transform: scale(0.9, 0.9);
    }

    & :hover .details {
      transition: .3s ease-in;
      opacity: .3;
    }

    & :hover {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      transform: translate(0, -10px);
      transform: scale(1.05);
    }
  `;

    return (
      <>
        <Container>
          <InnerContainer>
            <div className="img">
              <Img className="image" alt="" src={photos} />
            </div>
            <div className="sample">
              <a className="categoryTitle" onClick={(event) => this.openModal(event)} />
            </div>
            <div className="details">
              <RelatedProductsDetails>
                <div className="name">
                  Name:
                  {' '}
                  {name}
                </div>
              </RelatedProductsDetails>
              <RelatedProductsDetails>
                Price:
                {' '}
                {price}
                {' '}
                CAD
              </RelatedProductsDetails>
              <RelatedProductsDetails>
                <Stars rating={`${isNaN(averageRating) ? 0 : Math.round(averageRating) * 20}%`} />
                {averageRating}
              </RelatedProductsDetails>
            </div>
            <div className="overlay">
              <div className="content">
                Love this product?
                {' '}
                {/* <a onClick={(event) => this.openModal(event)}>Compare</a> */}
              </div>
            </div>
          </InnerContainer>
        </Container>
        <Modal
          showModal={showModal}
          openModal={this.openModal}
          compareProdName={name}
          compareProdFeatures={features}
          currentProductName={currentProduct.name}
          currentProductFeatures={currentProduct.features}
        />
      </>
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
