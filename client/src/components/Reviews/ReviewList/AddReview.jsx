import React from 'react';
import styled from 'styled-components';


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


class AddReview extends React.Component {
  constructor() {
    super();
    this.state = {

    }
    this.handleReviewSubmit = this.handleReviewSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e) {
    const { name } = e.target;
    const { value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleReviewSubmit(event) {
    event.preventDefault();
    const message = 'You must enter the following:';
    const {
      overallRating,
      recommended,
      body,
      email,
      nickname,
    } = this.state;

    if (overallRating === undefined) {
      alert(`${message} please select an overall rating`);
    }
    if (recommended === undefined) {
      alert(`${message} please select a recommendation`);
    }

    if (body === undefined) {
      alert(`${message} please submit a review body`);
    }
    if (nickname === undefined) {
      alert(`${message} please enter your nickname`);
    }
    if (email === undefined) {
      alert(`${message} please enter your email address`);
    }
  }

  render() {
    return (
      <div>
        <h1> Write a New Review!</h1>
        <form onSubmit={this.handleReviewSubmit}>
          <label htmlFor="overallRating">
            Over-All Rating:
            <br />
            <input
              id="overallRating"
              name="overallRating"
              type="range"
              min="0"
              max="5"
              step="1"

              onChange={this.handleChange}
            />
          </label>
          <br />
          <div>
            <p>Do you recommend this product?</p>
            <label htmlFor="yes">
              Yes
              <input
                type="radio"
                id="yes"
                name="recommended"
                value="yes"
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="no">
              No
              <input
                type="radio"
                id="no"
                name="recommended"
                value="no"
                onChange={this.handleChange}
              />
            </label>
          </div>

          <h4>Subject line:</h4>
          <input
            type="text"
            id="summary"
            name="summary"
            placeholder="TLDR"
            onChange={this.handleChange}
          />

          <br />
          <div>
            <h4>Your Review:</h4>
            <textarea
              name="body"
              defaultValue="What do you think?"
              onChange={this.handleChange}
            />
          </div>
          <br />
          <h4>Please enter user name: </h4>
          <input
            type="text"
            id="nickname"
            name="nickname"
            placeholder="enter username here ..."
            onChange={this.handleChange}
          />

          <h4>Your email *</h4>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="enter email here ..."
            onChange={this.handleChange}
          />

          <br />
          <Button
            type="submit"
          > Submit </Button>
        </form>

      </div>
    )
  }
}

export default AddReview;