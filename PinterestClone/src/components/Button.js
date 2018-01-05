/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { PinIcon } from '../util/icons';

export default class Button extends Component {
  render() {
    let bgColor, textWeight, textColor
    if(this.props.red) {
      bgColor = "red"
      textColor = "white"
    } else {
      bgColor = "#cecece"
      textWeight = "bold"
      textColor = "black"
    }
    return (
      <View style={[styles.PinButton, {backgroundColor: bgColor}]}>
        {this.props.icon && <PinIcon />}
        <Text style={[styles.PinButtonText, {fontWeight: textWeight, color: textColor}]}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  PinButton: {
    flexDirection: 'row',
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 6,
    justifyContent: 'space-around',
    width: 60,
  },
  PinButtonText: {
    color: 'white',
  },
});
