import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';
import AddReview from './AddReview.jsx';
import axios from 'axios';

class ReviewList extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    }
    this.getReviews = this.getReviews.bind(this);
  }
  getReviews(id) {
    console.log('getting reviews with axios')
    axios({
      method: 'get',
      url: `/reviews/`,
      params: {
        product_id: id
      }
    })
      .then((data) => {
        console.log('success getting data. here is data:', data.data.results)
        this.setState({reviews: data.data.results})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount() {
    console.log('component mounted');
    this.getReviews(61579);
  }

  render() {
    return (
      <div>
        {this.state.reviews.map((review, index) =>
        <ReviewListItem review={review} key={index} />
        )}
        <AddReview />
      </div>
    )
  }
}

export default ReviewList;