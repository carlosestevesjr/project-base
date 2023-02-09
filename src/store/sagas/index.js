import { all } from 'redux-saga/effects';
import authSagas from './authentication';

export default function* rootSaga() {
  yield all([
    authSagas(),
  ]);
}
