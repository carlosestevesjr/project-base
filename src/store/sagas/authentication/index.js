import { all, call, takeLatest, put, fork } from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../services/api';
import {
  Creators as AuthActions,
  Types as AuthTypes,
} from '../../reducers/authentication';


function* login({ payload }) {
  
  try {
    const {
      data,
    } = yield call(api.get, 'pokemon', payload);

    yield put(AuthActions.loginRequestSuccess(data));
  } catch (error) {
    yield put(AuthActions.loginRequestFail());
  }
}

export function* loginWatcher() {
  yield takeLatest(AuthTypes.LOGIN_REQUEST, login);
}

export default function* rootSaga() {
  yield all([
    fork(loginWatcher),
  ]);
}
