import React from 'react';
import ReviewList from './ReviewList/ReviewList.jsx';

class Reviews extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <ReviewList />
      </div>
    )
  }
}

export default Reviews;