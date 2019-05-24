import { call, put } from 'redux-saga/effects'
import types from './types'
import CharacterService from '../../services/characters'

const publicKey = 'aceb1043da0eeb368117fe07b4c80492'


export const setCharacters = characters => ({
  type: types.SUCCESS,
  characters
})

export const setError = error => ({
  type: types.FAILURE,
  error
})

export function* charactersSagas({ searchString } = '') {
  try {
    let params = [
      `apikey=${publicKey}`, 
    ];

    if (searchString) {
      params.push(`nameStartsWith=${searchString}`)
    }

    const { data } = yield call(CharacterService.getCharacters, `${params.join('&')}`);
    yield put(setCharacters(data.data.results))
  } catch (error) {
    yield put(setError(error))
  }
}