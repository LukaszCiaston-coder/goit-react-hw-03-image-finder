import React, { Component } from 'react';
import styles from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  handleClick = () => {
    this.props.onItemClick(this.props.image);
  };

  render() {
    const { image } = this.props;

    return (
      <li className={styles['gallery-item']} onClick={this.handleClick}>
        <img src={image.webformatURL} alt="" />
      </li>
    );
  }
}