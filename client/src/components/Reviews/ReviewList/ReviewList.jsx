import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';
import AddReviewModal from './AddReviewModal.jsx';
import ReviewSortBy from './ReviewSortBy.jsx';
import styled from 'styled-components'
import axios from 'axios';

const Button_Group = styled.div`
  display: flex;
  padding: 0.25em 1em;
`

const Button = styled.button`
  border-radius: 8px;
  border: 0px solid #05386b;
  color: #f7f9fb;
  background-color: #8fc1e3;
  &:hover {
    cursor: pointer;
    background-color: #f7f9fb;
    color: #8fc1e3;
  }
  object-fit: contain;
  margin: 0 1em;
  padding: 0.25em 1em;
  border-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
`;

const ReviewListItems_Container = styled.div `
height: 95%;
gap: 10px;
margin-top: 20px;

::-webkit-scrollbar {
  display: none;
}
margin-bottom: 40px
`;

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
      <ReviewListItems_Container >
        {this.state.display.map((review, index) =>
        <ReviewListItem review={review} key={index} />
        )}
        <Button_Group >

         <Button onClick={ this.handleMoreReviews }>
            More Reviews
        </Button>
          <AddReviewModal />
        </Button_Group >
      </ReviewListItems_Container>

    );
  }
}

export default ReviewList;

