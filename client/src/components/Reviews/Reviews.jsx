import React from 'react';
import ReviewList from './ReviewList/ReviewList.jsx';
import ReviewMetrics from './ReviewMetrics/ReviewMetrics.jsx';
import styled from 'styled-components';

const Container = styled.div`
width: 60%;
display: flex;
flex-direction: column;
`;
const heading = {
  fontSize: '32px',
  color: 'teal'
}
const ReviewsContainer = styled.div`
width: 500px;
display: flex;
flex-direction: column;
flex-wrap: column;
padding: 0 500px;
justify-content: space-between;
`;
const ReviewMetricsContainer = styled.div`
width: 500px;
display: flex;
flex-direction: column;
flex-wrap: column;
justify-content: space-between;
`;

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

      <Container>

        <h1 style={heading}> Ratings and Reviews
        </h1>
        <ReviewMetricsContainer>
          <ReviewMetrics id={this.props.id}/>
        </ReviewMetricsContainer>
        <ReviewsContainer>
          <ReviewList id={this.props.id}/>
        </ReviewsContainer>

      </Container>
    )
  }
}

export default Reviews;