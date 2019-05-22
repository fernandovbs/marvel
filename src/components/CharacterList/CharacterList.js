import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CharacterListItem from '../CharacterListItem/CharacterListItem';
import types from '../../redux/characters/types';

const CharacterList = props => {
  useEffect(() => {
    props.dispatch({
      type: types.REQUEST
    });
  }, []);

  return props.characters.map(character => <CharacterListItem key={character.id} character={character} />);
};

function mapStateToProps(state) {
  return { characters: state.Characters.characters };
}

export default connect(mapStateToProps)(CharacterList);
