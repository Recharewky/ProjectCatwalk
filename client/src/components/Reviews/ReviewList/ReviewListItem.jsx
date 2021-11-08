import React from 'react';
import styled from 'styled-components';

const ReviewItem_Container = styled.div `
  display:flex;
  flex-direction: column;
  margin: 0.5em 1em;
  padding: 0.5em 1em;
  gap: 20px;
  background: palegrey;
  border-radius: 3px;
  border: 2px solid grey;
`;
const Paragraph_Container = styled.div `
  display:flex;
  flex-direction: column;
  margin: 0.1em .5em;
  padding: 0.1em .1em;
  gap: 20px;
  background: white;

`;
const reviewerName = {
  fontSize: '18px',
  color: 'teal'
}
const summary = {
  fontSize: '13px',
  color: 'grey'
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

        <h1 style={reviewerName}>{this.props.review.reviewer_name}</h1>
        <Paragraph_Container>
          <h2 style={summary}>-- {this.props.review.summary}</h2>
          <p>-- {this.props.review.body}</p>
        </Paragraph_Container>
      </div>
      </ReviewItem_Container>
    )
  }
}

export default ReviewListItem;