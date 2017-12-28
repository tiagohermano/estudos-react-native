import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Github App</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>Powered by React Native</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', //alinhamento vertical
    alignItems: 'center', //alinhamento horizontal
    backgroundColor: '#27ae60',
  },

  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35
  },

  subtitle: {
    color: 'white',
    fontWeight: '200',
    paddingBottom: 20,
  },

  titleContainer: {
    justifyContent: 'center',
    flex: 1,
  }
});
