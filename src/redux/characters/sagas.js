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

export function* charactersSagas() {
  try {
    const { data } = yield call(CharacterService.getCharacters, `apikey=${publicKey}`)
    yield put(setCharacters(data))
  } catch (error) {
    yield put(setError(error))
  }
}