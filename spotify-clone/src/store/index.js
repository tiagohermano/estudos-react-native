import { combineReducers } from 'redux';

//  Reducers
import navReducer from 'navigation/reducer';

import configureStore from './configureStore';
import rootSaga from './sagas';

export default () => {
  const rootReducer = combineReducers({
    nav: navReducer,
  });

  return configureStore(rootReducer, rootSaga);
};
