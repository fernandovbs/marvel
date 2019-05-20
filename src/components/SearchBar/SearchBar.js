import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';

const Field = ({ Component, ...props}) => <Component {...props} />

class SearchBar extends Component {
  state = {};

  render() {
    return (
      <div>
        <Field
          name="searchform"
          placeholder="Buscar Personagens"
          Component={SearchForm}
          type="text"
          onChange={() => console.log()}
          data-testid="SearchBar"
        />
      </div>
    );
  }
}

export default SearchBar;
