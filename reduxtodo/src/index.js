import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';

import TodoList from './components/TodoList';
import Counter from './components/Counter';

import store from './store';

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <View>
          <TodoList />
          <Counter />
        </View>
      </Provider>
    );
  }
}
