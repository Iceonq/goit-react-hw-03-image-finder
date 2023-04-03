import React, { Component } from 'react';

export class ImageGallery extends Component {
  render() {
    return (
      <ul className="gallery">
        {/* <!-- Zbiór <li> z obrazami --> */}

        {this.props.images.map(image => {
          return (
            <li>
              <img src={image.webformatURL} />
            </li>
          );
        })}
      </ul>
    );
  }
}
