import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import SearchBar from '../../components/SearchBar/SearchBar';
import CharacterList from '../../components/CharacterList/CharacterList';
import types from '../../redux/characters/types';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {

  // eslint-disable-next-line react/no-typos
  ComponentDidMount() {
    this.props.dispatch({
      type: types.REQUEST
    })
  }

  render() {
    console.log(this.props.characters)
    return (
      <Fragment>
        <Nav />
        <SearchBar onChange={e => console.log()} />
        <CharacterList />
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {characters: state.characters};
}

export default connect(mapStateToProps)(Home);
