import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

class ImageLightBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    this.setState({
      isOpen: false,
    });
  }

  onOpen() {
    this.setState({
      isOpen: true,
    })
  }

  render() {
    const { image } = this.props;
    const { isOpen } = this.state;
    return (
      <React.Fragment>
        {
          isOpen && (
            <Lightbox
              mainSrc={image}
              onCloseRequest={this.onClose}
            />
          )
        }
      </React.Fragment>
    )
  }
}

export default ImageLightBox;
