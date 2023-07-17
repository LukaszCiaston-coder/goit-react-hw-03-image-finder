import React, { Component } from 'react';
import styles from './ImageGallery.module.css';
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem'

export class ImageGallery extends Component {
  render() {
    const { images, onItemClick } = this.props;

    return (
      <ul className={styles.gallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onItemClick={onItemClick}
          />
        ))}
      </ul>
    );
  }
}