import React, { Component } from 'react';
import axios from 'axios';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

const API_KEY = '36779044-50439618c93dcb9f395d82e01';
export class App extends Component {
  state = {
  query: '',
  images: [],
  page: 1,
  isLoading: false,
  isLoadingMore: false,
  selectedImage: null,
  };

  handleSearch = (newQuery) => {
    this.setState(
      {
        query: newQuery,
        images: [],
        page: 1,
      },
      this.fetchImages
    );
  };

  handleLoadMore = () => {
    this.setState(
      (prevState) => ({
        page: prevState.page + 1,
        isLoadingMore: true,
      }),
      this.fetchImages
    );
  };

  handleItemClick = (image) => {
    this.setState({
      selectedImage: image,
    });
  };

  handleCloseModal = () => {
    this.setState({
      selectedImage: null,
    });
  };

  fetchImages = async () => {
    const { query, page } = this.state;

    if (!query) return;

    this.setState({
      isLoading: true,
    });

    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );

      this.setState((prevState) => ({
        images: [...prevState.images, ...response.data.hits],
        isLoading: false,
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
      this.setState({
        isLoading: false,
      });
    }
  };

render() {
    const { images, isLoading, selectedImage } = this.state;

    return (
      <div className="app">
        <Searchbar onSubmit={this.handleSearch} />

        {isLoading && <Loader />}

        {images.length > 0 && (
          <ImageGallery images={images} onItemClick={this.handleItemClick} />
        )}

        {images.length > 0 && !isLoading && (
          <Button onClick={this.handleLoadMore} />
        )}

        {selectedImage && (
          <Modal image={selectedImage} onClose={this.handleCloseModal} />
        )}

        {/* Render other components */}
      </div>
    );
  }
}

export default App;