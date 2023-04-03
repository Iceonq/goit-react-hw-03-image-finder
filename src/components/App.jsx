import React, { Component } from 'react';
import '../styles.css';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import axios from 'axios';

const KEY = '33284780-c89390efdc4f502db65b92b61';

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
  };

  componentDidMount() {
    this.fetchImages();
    console.log(this.state);
  }

  handleSearch = searchQuery => {
    this.setState({ searchQuery });
  };

  fetchImages = async () => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${this.searchQuery}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12}`
      );
      const images = response.data.hits;
      this.setState({ images });
    } catch (error) {
      console.log(error);
    }
  };

  // function renderImages(per_page) {
  //   fetchImages(per_page).then(response => {
  //     console.log(response.totalHits);
  //   });
  // }

  render() {
    return (
      <div>
        <Searchbar onSearch={this.handleSearch} />
        <ImageGallery images={this.state.images} />
        <ImageGalleryItem />
        <Loader />
        <Button />
        <Modal />
      </div>
    );
  }
}
