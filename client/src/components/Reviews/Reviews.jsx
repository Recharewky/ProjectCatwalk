import React from 'react';
import ReviewList from './ReviewList/ReviewList.jsx';
import RatingsBreakdown from './RatingsBreakdown/RatingsBreakdown.jsx';
import styled from 'styled-components';

const HeadingContainer = styled.div`
  fontSize: '32px',
  color: 'teal'
`;

const Container = styled.div`
width: 50%;
display: flex;
flex-direction: row;
`;

const ReviewsContainer = styled.div`
width: 500px;
display: flex;
flex-direction: row;
flex-wrap: row;
justify-content: space-between;
`;
const RatingsBreakdownContainer = styled.div`
width: 200px;
display: flex;
flex-direction: row;
flex-wrap: column;
justify-content: space-between;
`;

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // <HeadingContainer> <div><h1>Ratings and Reviews</h1></div>  </HeadingContainer>
      <Container>
        <RatingsBreakdownContainer>
          <RatingsBreakdown id={this.props.id}/>
        </RatingsBreakdownContainer>
        <ReviewsContainer>
          <ReviewList id={this.props.id}/>
        </ReviewsContainer>
      </Container>
    )
  }
}

export default Reviews;