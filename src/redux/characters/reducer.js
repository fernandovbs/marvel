import types from './types';

const defaultState = {
  fetching: false,
  characters: [],
  error: false
}

const Characters = (state = defaultState, action) => {
  switch (action.type) {
    case types.REQUEST:
      return {
        ...state,
        fetching: true,
        characters: [],
        error: false
      }

    case types.SUCCESS:
    return {
        ...state,
        fetching: false,
        characters: action.characters,
        error: false
      }

    case types.FAILURE:
      return {
        ...state,
        fetching: false,
        characters: [],
        error: action.error
      }

    case types.CANCEL:
      return {
        ...state,
        fetching: false,
        characters: [],
        error: false
      }

    case types.RESET:
      return {
        ...state,
        fetching: false,
        characters: [],
        error: false
      }

    default:
      return state;
  }
};

export default Characters;
