/* @flow */
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { colors } from 'styles';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Githubber</Text>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="exchange" size={14} color={colors.primary}></Icon>
        </TouchableOpacity>
      </View>
    );
  }
}
