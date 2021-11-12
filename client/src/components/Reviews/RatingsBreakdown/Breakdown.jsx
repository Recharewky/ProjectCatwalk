import React from 'react';
import styled from 'styled-components';
import Bar from './Bar.jsx';

class Breakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakdowns: this.props.breakdowns
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      breakdowns: props.breakdowns
    };
  }

  render() {
    if (this.state.breakdowns !== undefined) {
      return (
        <div>
          {this.state.breakdowns.map((breakdown, index) =>
            <Bar filterStar={this.props.filterStar}
              key = {index}
              breakdown = {breakdown}
            />
          )}
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}


export default Breakdown;
