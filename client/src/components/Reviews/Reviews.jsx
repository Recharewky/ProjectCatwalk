import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReviewList from './ReviewList/ReviewList.jsx';
import RatingsBreakdown from './RatingsBreakdown/RatingsBreakdown.jsx';

const HeadingContainer = styled.div`
  fontSize: '32px',
`;

const Container = styled.div`
  margin-left: 7.8vw;
  display: flex;
  border: #1c9bef 0px;
  border-style: solid;
  width: 85%;
  height: 100%;
`;

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: column;
  justify-content: space-between;
  display: flex;
  border: #31708e 0px;
  border-style: solid;
  width: 80%;
  max-width: 1000px;
  border-radius: 10px;

`;
const RatingsBreakdownContainer = styled.div`

  display: flex;
  flex-direction: column;
  flex-wrap: column;
  justify-content: space-between;
`;

const Reviews = (props) => {
  const [starFilter, setFilter] = useState(0);
  const starFilterer = (star) => setFilter(star);
  return (
      // <HeadingContainer> <div><h1>Ratings and Reviews</h1></div>  </HeadingContainer>
      <Container>
        <RatingsBreakdownContainer>
          <RatingsBreakdown filterStar={starFilterer}id={props.id}/>
        </RatingsBreakdownContainer>
        <ReviewsContainer>
          <ReviewList  id={props.id}/>
        </ReviewsContainer>
      </Container>
    )
}

export default Reviews;
