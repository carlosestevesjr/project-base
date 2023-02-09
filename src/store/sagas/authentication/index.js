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
      data: { access_token: token, profile },
    } = yield call(api.post, '/employees/auth', payload);

    if (profile?.is_active) {
      yield call(saveToken, { token });
      yield put(AuthActions.loginRequestSuccess(data));
    } else {
      yield put(AuthActions.loginRequestFail('Usuário inativo!'));
    }
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
