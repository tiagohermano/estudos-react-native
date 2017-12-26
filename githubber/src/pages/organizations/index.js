import React, { Component } from 'react';

import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Organization from './components/Organization';

export default class Organizations extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="building" size={20} color={tintColor} />
    ),
  };

  render() {
    return (
      <View>
        <Organization />
      </View>
    );
  }
}
