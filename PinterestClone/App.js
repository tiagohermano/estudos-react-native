/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import Pin from './src/components/Pin';

export default class App extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      columns: 2,
      pin: {
        barkhampton: {
          source: require('./src/assets/images/barkhampton.jpg'),
          originalWidth: 576,
          originalHeight: 768,
        },
        redmi51: {
          source: require('./src/assets/images/redmi5-1.png'),
          originalWidth: 1400,
          originalHeight: 788,
        },
        redmi52: {
          source: require('./src/assets/images/redmi5-2.png'),
          originalWidth: 1400,
          originalHeight: 788,
        }
      }
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Pin pinsource={this.state.pin.barkhampton} columns={this.state.columns}/>
        <Pin pinsource={this.state.pin.redmi51} columns={this.state.columns}/>
        <Pin pinsource={this.state.pin.redmi52} columns={this.state.columns}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
