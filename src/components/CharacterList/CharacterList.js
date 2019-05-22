import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CharacterListItem from '../CharacterListItem/CharacterListItem';
import types from '../../redux/characters/types';
import { Row } from '../../styles'

const CharacterList = props => {
  useEffect(() => {
    props.dispatch({
      type: types.REQUEST
    });
  }, []);

  return (
      <Row>
        {props.characters.map(character => <CharacterListItem key={character.id} character={character} />)}
      </Row>
    )
  };

function mapStateToProps(state) {
  return { characters: state.Characters.characters };
}

export default connect(mapStateToProps)(CharacterList);
