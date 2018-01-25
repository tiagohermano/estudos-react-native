import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.element,
  };

  static defaultProps = {
    title: null,
    children: null,
  };

  renderHeaderTitle = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>
        { this.props.title }
      </Text>
    </View>
  );

  render() {
    if (!this.props.children) {
      return this.renderHeaderTitle();
    }

    return (
      <View style={styles.headerContainer}>
        { this.props.children }
      </View>
    );
  }
}
