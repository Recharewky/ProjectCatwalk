import React from 'react';


class AddReview extends React.Component {
  constructor() {
    super();
    this.state = {
      // overallRating: 0,
      // recommended: null,
      body: '',
      name: '',
      summary: '',
      // rating: null
    }
    this.handleReviewSubmit = this.handleReviewSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleReviewSubmit(event) {
    const { summary } = this.state;
    const { body } = this.state;
    const { name } = this.state;

  }

  render() {
    return (
      <div>
        <h1> Write a New Review!</h1>
        <form onSubmit={this.handleReviewSubmit} />

      </div>
    )
  }
}

export default AddReview;