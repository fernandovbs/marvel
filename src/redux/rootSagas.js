/* Effects */
import { all, takeLatest } from 'redux-saga/effects';
import { charactersSagas } from './characters/sagas';
import types from './characters/types';

export default function* rootSagas() {
  // here we initialize all the sagas from different files
  yield all([takeLatest(types.REQUEST, charactersSagas)]);
}
