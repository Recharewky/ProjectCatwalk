import React, { Component } from 'react';
import ModalImage , { Lightbox } from 'react-modal-image';
import styled from 'styled-components';
// import {Lightbox} from 'react-image-lightbox';
// import 'react-image-lightbox/style.css';

const Preview = styled.button`
border: none;
background-color: transparent;
&:hover {
  cursor: pointer;
}
`;

export default class Photo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // photoIndex: 0,
      // isOpen: false,
    };
  }

  render() {
    const images = [this.props.photo.url];
    const { photoIndex, isOpen } = this.state;

    return (
      <div>

        <Preview type="button" onClick={() => this.setState({ isOpen: true })}>
          <img className="thumbnail"
            src={this.props.photo.url}
            alt={this.props.photo.id}
            width="193"
            height="130"
          />
        </Preview>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
      </div>
    );
  }
}