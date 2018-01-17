import { takeLatest } from 'redux-saga/effects';
import { searchAndAddRepository } from 'redux/sagas/favorites';

export default function* root() {
  yield [
    takeLatest('SEARCH_REPOSITORY', searchAndAddRepository),
  ];
}
