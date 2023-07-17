import React, { Component } from 'react';
import styles from './Modal.module.css';

class Modal extends Component {
  handleClose = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { image } = this.props;

    return (
      <div className={styles.overlay} onClick={this.handleClose}>
        <div className={styles.modal}>
          <button className={styles.closeButton} onClick={this.props.onClose}>
            X
          </button>
          <img src={image.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;