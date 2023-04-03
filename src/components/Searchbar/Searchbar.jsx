import React, { Component } from 'react';

export class Searchbar extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.searchInput.value;
    this.props.onSearch({
      searchQuery,
    });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" class="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            name="searchInput"
          />
        </form>
      </header>
    );
  }
}
