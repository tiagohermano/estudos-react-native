import { takeLatest } from 'redux-saga/effects';
import { searchAndAddRepository } from 'redux/sagas/favorites';

import { Types as FavoritesTypes } from 'redux/ducks/favorites';

export default function* root() {
  yield [
    takeLatest(FavoritesTypes.SEARCH, searchAndAddRepository),
  ];
}
