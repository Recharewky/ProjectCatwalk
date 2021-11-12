import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';
import AddReviewModal from './AddReviewModal.jsx';
import styled from 'styled-components'
import axios from 'axios';

const Button = styled.button`
  background: #edf5e1;
  border-radius: 4px;
  border: 2px solid #05386b;
  color: #05386b;
  &:hover {
    cursor: pointer;
  }
  margin: 0 1em;
  padding: 0.25em 1em;
`

class ReviewList extends React.Component {
  constructor() {
    super();
    this.state = {
      masterList: [],
      reviews: [],
      display: [],
      reviewCount: 4
    }
    this.getReviews = this.getReviews.bind(this);
    this.handleMoreReviews = this.handleMoreReviews.bind(this);
  }
  getReviews(id) {
    axios({
      method: 'get',
      url: '/reviews',
      params: {
        product_id: id
      }
    })
      .then(({data}) => {
        this.setState({
          masterList: data.results,
          reviews: data.results,
          display: data.results.slice(0, 2)
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    console.log('component mounted', this.props.id);
    this.getReviews(this.props.id);
  }

  handleMoreReviews() {
    var count = this.state.reviewCount;
    var display = this.state.reviews.slice(Math.max(0, count-2), count);
    this.setState((state) => {
      return {
        display: display,
        reviewCount: state.reviewCount + 2
      };
    });
  }

  render() {
    return (
      <div >
        {this.state.display.map((review, index) =>
        <ReviewListItem review={review} key={index} />
        )}
        <div>
         <Button onClick={() => this.handleMoreReviews()}>
            More Reviews
        </Button>
          <AddReviewModal />
        </div>
      </div>

    );
  }
}

export default ReviewList;

