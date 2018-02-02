import api from '../services/api';
import * as actions from './userActions';

import { call, put, takeLatest } from 'redux-saga/effects';

function* addUserFromGithub(action) {
  const response = yield call(api.get, `/users/${action.payload.username}`);

  if (response.ok) {
    yield put(actions.addUserSuccess(reponse.data));
  } else {
    yield put(actions.addUserFailure());
  }
}

export default function* root() {
  yield [
    takeLatest('ADD_USER_REQUEST', addUserFromGithub()),
  ];
}
