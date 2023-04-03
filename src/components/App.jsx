import React, { Component } from 'react';
import '../styles.css';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import axios from 'axios';

const KEY = '33284780-c89390efdc4f502db65b92b61';

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    hasMore: true,
  };

  handlePagination = e => {
    e.preventDefault();
    this.setState({ page: this.state.page + 1 }, () => {
      this.fetchImages();
    });
  };

  componentDidMount() {
    this.fetchImages();
    console.log(this.state);
  }

  handleSearch = searchQuery => {
    this.setState({ searchQuery }, () => {
      this.fetchImages();
    });
    this.setState({ images: [] });
  };

  // handlePagination = page => {
  //   this.setState({ page }),
  //     () => {
  //       page + 1;
  //     };
  // };

  fetchImages = async () => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${this.state.searchQuery}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12}`
      );
      const newImages = response.data.hits;
      if (response.data.totalHits === 0) {
        alert('Nothing was found');
        this.setState({
          hasMore: false,
        });
      } else {
        this.setState(prevState => ({
          images: [...prevState.images, ...newImages],
        }));

        this.setState({ newImages });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <Searchbar onSearch={this.handleSearch} />
        <ImageGallery images={this.state.images} />
        <Loader />
        <Button
          pagination={this.handlePagination}
          hasMore={this.state.hasMore}
        />
        <Modal />
      </div>
    );
  }
}
