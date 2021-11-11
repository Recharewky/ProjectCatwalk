import styled from 'styled-components';

const Stars = styled.div`
  display: inline-block;
  font-size: 25px;
  font-family: Times; // make sure ★ appears correctly
  line-height: 1;
  &::before {
    content: "★★★★★";
    letter-spacing: 3px;
    background: linear-gradient(90deg, #ffe789 ${props => props.rating}, #c4c4c4 ${props => props.rating});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;


export default Stars;