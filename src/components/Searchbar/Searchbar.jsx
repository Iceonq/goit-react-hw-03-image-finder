import React, { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  handleSubmit = e => {
    e.preventDefault();
    let searchQuery = e.target.searchInput.value;
    this.props.onSearch(searchQuery);
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchform} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.searchformbutton}>
            <span className={css.searchformbuttonlabel}>Search</span>
          </button>

          <input
            className={css.searchforminput}
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
