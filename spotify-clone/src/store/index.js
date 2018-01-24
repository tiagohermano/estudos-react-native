// import { combineReducers } from 'redux';
import configureStore from './configureStore';
import rootSaga from './sagas';

export default () => {
  return configureStore(() => {}, rootSaga);
};
