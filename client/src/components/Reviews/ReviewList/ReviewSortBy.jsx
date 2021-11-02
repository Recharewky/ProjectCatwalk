import React from 'react';

class ReviewSortBy extends React.Component {
  constructor(props) {
    super();
    this.state = {

    }

  }
  render() {
    return (
      <div>
        <h1>Sort By...</h1>
        <b>{this.props.totalReviews} reviews, sorted by ...</b>
      </div>

    );
  }
}

export default ReviewSortBy;