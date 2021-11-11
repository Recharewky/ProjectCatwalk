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

const OverviewContainer = styled.div`
  display: inline-flex;
  background-color: papayawhip;
  width: 100%;
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
      <div>
        {info ? (
          <div>
            <OverviewContainer>
              <MainImage photos={currentStyle.photos} />
              <div>
                <ProductInfo info={info} />
                <StyleOptions
                  styles={styles}
                  currentStyle={currentStyle}
                  onStyleChange={this.onStyleChange}
                />
              </div>
              <div>
                <Selection currentStyle={currentStyle} />
              </div>
            </OverviewContainer>
            <Description info={info} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Overview;
