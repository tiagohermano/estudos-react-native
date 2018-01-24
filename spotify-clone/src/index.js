import 'config/ReactotronConfig';

import React from 'react';
import { View } from 'react-native';

import { Provider } from 'react-redux';
import createStore from './store';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <View />
  </Provider>
);

export default App;
