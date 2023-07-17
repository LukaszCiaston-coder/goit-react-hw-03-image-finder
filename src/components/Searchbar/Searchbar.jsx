import React, { Component } from 'react';
import styles from './Searchbar.module.css'; // Załóżmy, że tworzymy osobny plik CSS o nazwie "Searchbar.module.css" dla stylów komponentu Searchbar

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    const { query } = this.state;

    return (
      <header className={styles.searchbar}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
                />
                <button type="submit" className={styles.button}>
                    <span className={styles['button-label']}>Search</span>
                </button>
        </form>
      </header>
    );
  }
}

