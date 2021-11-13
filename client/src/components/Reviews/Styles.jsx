import styled from 'styled-components';

const Stars = styled.div`
  display: inline-block;
  font-size: 25px;
  font-family: Times; // make sure ★ appears correctly
  line-height: 1;
  &::before {
    content: "★★★★★";
    letter-spacing: 1px;
    background: linear-gradient(90deg, #31708E ${(props) => props.rating}, #8FC1E3 ${(props) => props.rating});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default Stars;
