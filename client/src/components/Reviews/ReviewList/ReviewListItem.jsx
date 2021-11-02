import React from 'react';
import styled from 'styled-components';

const ReviewItem_Container = styled.div `
  display:flex;
  flex-direction: column;
  margin: 0.5em 1em;
  padding: 0.5em 1em;
  gap: 20px;
`;
const reviewerName = {
  fontSize: '18px',
  color: 'teal'
}


class ReviewListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    console.log(this.props)
    return (
      <ReviewItem_Container>
      <div>
        <h1 style={reviewerName}>{this.props.review.reviewer_name}</h1> <p>-- {this.props.review.summary}</p>
      </div>
      </ReviewItem_Container>
    )
  }
}

export default ReviewListItem;