/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import Overview from './Overview/Overview.jsx';
import RelatedProduct from './RelatedProducts/RelatedProducts.jsx';
import QA from './QA/QA.jsx';
import Reviews from './Reviews/Reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 61579,
    };
  }

  render() {
    const { id } = this.state;
    const Container = styled.div`
      font-family: 'Roboto', sans-serif;
      font-style: normal;
    `;
    return (
      <Container>
        Hello World
        <Overview id={id} />
        <RelatedProduct id={id} />
        {/* <QA/>
        <Reviews/> */}
      </Container>
    );
  }
}

export default App;
