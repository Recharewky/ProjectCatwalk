import React from 'react';
import axios from 'axios';
import {token} from '../../../../config.js';

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        ~This is where te overview would go~
        Check out this cool product with id of {this.props.id}
      </div>
    )
  }
}

export default Overview;