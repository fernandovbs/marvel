import Api from '../utils/api';

class CharacterService {
  static getCharacters([...payload]) {
    const uri = payload.join('&')
    return Api.get(uri);
  }
}

export default CharacterService;
