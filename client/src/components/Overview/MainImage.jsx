/* eslint-disable react/prop-types */
import React from 'react';

class MainImage extends React.Component {
  constructor(props) {
    super(props);

    const { photos } = this.props;
    this.state = {
      currentPhoto: photos[0],
      photos,
    };
  }

  render() {
    const { currentPhoto } = this.state;
    return (
      <img src={currentPhoto.url} alt="hi-res product" />
    );
  }
}

export default MainImage;
