import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    const { image } = this.props;
    return (
      <li className={css.galleryitem}>
        <img
          src={image.webformatURL}
          alt={image.tags}
          className={css.galleryitemimage}
        />
      </li>
    );
  }
}
