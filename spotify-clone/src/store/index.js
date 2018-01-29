import { combineReducers } from 'redux';

//  Reducers
import navReducer from 'navigation/reducer';
import { reducer as trendingSongs } from './ducks/trending-songs';

import configureStore from './configureStore';
import rootSaga from './sagas';

export default () => {
  const rootReducer = combineReducers({
    nav: navReducer,
    trendingSongs,
  });

  return configureStore(rootReducer, rootSaga);
};
