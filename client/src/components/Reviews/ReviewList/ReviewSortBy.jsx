import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
font-size: 24px
`;

class ReviewSortBy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalReview: 248
    };
  }

  render() {
    return (
      <Container>
        <b>{this.state.totalReview} reviews, sorted by relevance</b>
      </Container>
    );
  }
}

export default ReviewSortBy;