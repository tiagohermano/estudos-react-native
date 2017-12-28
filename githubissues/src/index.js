import React, { Component } from 'react';
import {
  View,
  Text,
  AsyncStorage,
} from 'react-native';

export default class App extends Component {
  state = {
    repositories: [],
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the MyComponent component</Text>
      </View>
    );
  }
}
