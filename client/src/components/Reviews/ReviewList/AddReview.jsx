import React from 'react';


class AddReview extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange}/>
      </div>
    )
  }
}

export default AddReview;