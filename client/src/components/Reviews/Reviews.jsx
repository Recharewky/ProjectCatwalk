import React, { useState, useEffect } from 'react';
import ReviewList from './ReviewList/ReviewList.jsx';
import RatingsBreakdown from './RatingsBreakdown/RatingsBreakdown.jsx';
import styled from 'styled-components';

const HeadingContainer = styled.div`
  fontSize: '32px',
  color: 'teal'
`;

const Container = styled.div`
width: 750%;
display: flex;
flex-direction: row;
`;

const ReviewsContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: row;
justify-content: space-between;
`;
const RatingsBreakdownContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: column;
justify-content: space-between;
`;

const Reviews = (props) => {
  const [starFilter, setFilter] = useState(0)
  const starFilterer = (star) => setFilter(star);
    return (
      // <HeadingContainer> <div><h1>Ratings and Reviews</h1></div>  </HeadingContainer>
      <Container>
        <RatingsBreakdownContainer>
          <RatingsBreakdown filterStar= {starFilterer}id={props.id}/>
        </RatingsBreakdownContainer>
        <ReviewsContainer>
          <ReviewList filterStar= {starFilterer} id={props.id}/>
        </ReviewsContainer>
      </Container>
    )
}


export default Reviews;