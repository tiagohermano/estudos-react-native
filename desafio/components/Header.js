import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.text}>GoNative App</Text>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#DA6C6C',
    shadowRadius: 5,
    shadowOffset: {x: 0, y:2},
    shadowOpacity: 1
  },

  text: {
    color: '#333',
    fontWeight: 'bold'
  }
});

export default Header;
