import React from 'react';
import styled from 'styled-components';

const Bar_container = styled.div `
display: flex;
flex-direction: row;
width: 250px;
background-color: #f1f1f1;
text-align: center;
color: black;
height: 13px;
`;

const OneBar_container = styled.div `
display: flex;
flex-direction:row;
align-items: center;
padding-bottom: 8px;
width: 100%;
&:hover {
  cursor: pointer;
  background-color: #777777;
}
`;

const SideBar_div = styled.div `
padding-right: 12px;
font-size: 18px;
width: 19%
`;

const RightBar_div = styled.div `
padding-left: 8px;
font-size: 18px;
`;


class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakdown: props.breakdown
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.filterStar(this.state.breakdown[0]);
  }

  render() {
    const Bar_div = styled.div `
    width: ${this.state.breakdown[2]}%;
    height: 14px;
    background-color: #04AA6D
    `;

    return (
      <OneBar_container onClick={this.handleClick}>
        <SideBar_div > <a href="#3">{`${this.state.breakdown[0]} stars`} </a></SideBar_div>
        <Bar_container>
          <Bar_div>
          </Bar_div>
        </Bar_container>
        <RightBar_div>
          {`${this.state.breakdown[1]}`}
        </RightBar_div>
      </OneBar_container>
    );
  }
}

export default Bar;
