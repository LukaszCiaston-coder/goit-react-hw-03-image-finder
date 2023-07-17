import React, { Component } from 'react';
import styles from './Loader.module.css';

class Loader extends Component {
  render() {
    return (
      <div className={styles.loader}>
        <div className={styles.spinner}></div>
      </div>
    );
  }
}

export default Loader;