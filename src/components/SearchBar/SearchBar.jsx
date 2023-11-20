import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LuSearch } from 'react-icons/lu';
import css from './SearchBar.module.css';
import { notifySettings } from '../fetchImages-api';
import Notiflix from 'notiflix';

export class SearchBar extends Component {
  state = {
    query: '',
  };

  onInputChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      return Notiflix.Notify.warning(
        'Please enter key words for search.',
        notifySettings
      );
    }
    this.props.onSubmit(this.state);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={css.searchBar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
          <button
            className={css.searchForm__button}
            type="submit"
            text="Search"
            status="search"
          >
            <LuSearch size={22}></LuSearch>
          </button>

          <input
            className={css.searchForm__input}
            value={this.state.query}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            required
            placeholder="Search images and photos"
            onChange={this.onInputChange}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
