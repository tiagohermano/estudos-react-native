import React, { Component } from 'react';
import api from 'services/api';

import { View, Text, AsyncStorage } from 'react-native';

import styles from './styles';

import Repository from './components/Repository';

export default class Repositories extends Component {
  state = {
    repositories: [],
    loading: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <Repository />
      </View>
    );
  }
}
