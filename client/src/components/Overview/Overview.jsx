/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ProductInfo from './ProductInfo.jsx';
import MainImage from './MainImage.jsx';
import StyleOptions from './StyleOptions.jsx';
import Description from './Description.jsx';
import Selection from './Selection.jsx';

const ProductInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 670px 400px;
  grid-template-rows: 30px 280px 140px 80px;
  border: solid black;
  width: 100%;
  gap: 30px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

const OverviewContainer = styled.div`
  grid-row: 1;
  justify-self: center;
`;

const MainGridItem = styled.div`
  grid-row: 1;
  justify-self: center;
`;

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null,
      styles: null,
      currentStyle: null,
    };

    this.onStyleChange = this.onStyleChange.bind(this);
  }

  componentDidMount() {
    const { id } = this.props;
    axios.get(`/products/${id}`)
      .then((response1) => {
        const productResponse = response1.data;
        axios.get(`/products/${id}/styles`)
          .then((response2) => {
            const styleResponse = response2.data;
            this.setState({
              info: productResponse,
              styles: styleResponse,
              currentStyle: styleResponse.results[0],
            });
          })
          .catch((err) => {
            console.log(err);
          });
      });
  }

  onStyleChange(e, style) {
    this.setState({
      currentStyle: style,
    });
  }

  render() {
    const { info, styles, currentStyle } = this.state;
    return (
      <MainGridItem>
        {info && (
          <OverviewContainer>
            <ProductInfoContainer>
              <MainImage photos={currentStyle.photos} />
              <ProductInfo
                info={info}
                originalPrice={currentStyle.original_price}
                salePrice={currentStyle.sale_price}
              />
              <StyleOptions
                styles={styles}
                currentStyle={currentStyle}
                onStyleChange={this.onStyleChange}
              />
              <Selection currentStyle={currentStyle} />
            </ProductInfoContainer>
            <DescriptionContainer>
              <Description info={info} />
            </DescriptionContainer>
          </OverviewContainer>
        )}
      </MainGridItem>
    );
  }
}

export default Overview;
