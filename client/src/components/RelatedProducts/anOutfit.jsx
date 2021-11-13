/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */

import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import Stars from '../Reviews/Styles.jsx';

class AnOutfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: 0,
      photos: '',
      averageRating: '',
      category: '',
    };
  }

  componentDidMount() {
    const { aProduct } = this.props;
    const { updateMainButton } = this.props;
    const { currentProduct } = this.props;
    $.ajax({
      method: 'POST',
      url: `/relatedProducts/postAProduct/${aProduct}`,
      contentType: 'application/json',
      data: JSON.stringify({ aProduct }),
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
            photos: success.photos[0].photos[0].thumbnail_url === null ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png' : success.photos[0].photos[0].thumbnail_url,
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
    const { aProduct } = this.props;
    const { removeOutfit } = this.props;

    return (
      <>
        <Container>
          <InnerContainer>
            <div className="img">
              <Img className="image" alt="" src={photos} />
            </div>
            <div className="button">
              <i
                className="fas fa-times-circle"
                onClick={(event) => removeOutfit(event, aProduct)}
              />
            </div>
            <div className="sample">
              <a className="categoryTitle">{category}</a>
            </div>
            <div className="details">
              <RelatedProductsDetails>
                <div className="name">
                  {name}
                </div>
              </RelatedProductsDetails>
              <RelatedProductsDetails>
                {price}
                {' '}
                CAD
              </RelatedProductsDetails>
              <RelatedProductsDetails>
                <Stars rating={`${Number.isNaN(averageRating) ? 0 : Math.round(averageRating) * 20}%`} />
                {Number.isNaN(averageRating) ? averageRating : averageRating.slice(0, 4)}
              </RelatedProductsDetails>
            </div>
          </InnerContainer>
        </Container>
      </>
    );
  }
}

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
    padding: 1.5vw;
  `;

const InnerContainer = styled.div`
    border: #1c9bef 0px;
    border-style: solid;
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
    font-weight: 400;
    color: #5085A5;
    width: 18vw;
    height: 95%;
    border-radius: 5px;
    overflow: hidden;
    transition: 0.3s ease;
    border-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    & .button {
      position: relative;
      width: 0px;
      height: 0px;
    }
    & .fa-times-circle {
      position: absolute;
      top: -288px;
      left: 16vw;
      color: #8FC1E3;
      transform: scale(1.5);
    }
    & :active.fa-times-circle {
      transform: scale(1.4);
    }
    & .categoryTitle {
      font-weight: 400;
      display: block;
      background-color: #31708E;
      color: #F7F9FB;
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
    & .name {
      font-weight: 900;
    }
    & :hover {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      transform: translate(0, -20px);
      transform: scale(1.05);
    }
  `;
export default AnOutfit;
