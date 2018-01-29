import { takeLatest } from 'redux-saga/effects';

/* Types */
import { Types as TrendingSongsTypes } from 'store/ducks/trending-songs';

/* Sagas */
import { getTrendingSongs } from './trending-songs';

export default function* root() {
  yield [
    takeLatest(TrendingSongsTypes.TRENDING_REQUEST, getTrendingSongs),
  ];
}
