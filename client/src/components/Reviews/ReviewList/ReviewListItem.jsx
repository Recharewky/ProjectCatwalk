import React from 'react';

class ReviewListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    console.log(this.props)
    return (
      <div>
        {this.props.review.reviewer_name} -- {this.props.review.summary}
      </div>
    )
  }
}

export default ReviewListItem;