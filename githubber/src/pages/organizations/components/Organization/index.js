import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
} from 'react-native';

import styles from './styles';

export default class Organization extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://avatars0.githubusercontent.com/u/28929274?v=4&s=200' }}
         />
         <Text style={styles.title}>RocketSeat</Text>
      </View>
    );
  }
}
