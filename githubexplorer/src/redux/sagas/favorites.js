import api from 'services/api';
import { call, put } from 'redux-saga/effects';

export function* searchAndAddRepository(action) {
  const response = yield call(api.get, `/repos/${action.payload.repositoryName}`);

  yield put({ type: 'ADD_FAVORITE', payload: { repository: response.data } });
}
