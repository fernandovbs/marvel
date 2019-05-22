import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import SearchBar from '../../components/SearchBar/SearchBar';
import CharacterList from '../../components/CharacterList/CharacterList';
import { Container } from '../../styles'

// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {

  render() {
    console.log(this.props.characters)
    return (
      <Container>
        <Nav />
        <SearchBar onChange={e => console.log()} />
        <CharacterList />
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Home);
