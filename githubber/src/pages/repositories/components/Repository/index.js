import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Repository extends Component {
  static propTypes = {
    repository: PropTypes.shape({
      full_name: PropTypes.string,
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      watcher_count: PropTypes.number,
    }).isRequired,
  };

  static defaultProps = {};


  render() {
    const { repository } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{repository.full_name}</Text>
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Icon name="start" size={14} style={styles.infoIcon} />
            <Text style={styles.infoText}>{repository.stargazers_count}</Text>
          </View>

          <View style={styles.info}>
            <Icon name="code-fork" size={14} style={styles.infoIcon} />
            <Text style={styles.infoText}>{repository.forks_count}</Text>
          </View>

          <View style={styles.info}>
            <Icon name="eye" size={14} style={styles.infoIcon} />
            <Text style={styles.infoText}>{repository.watchers_count}</Text>
          </View>
        </View>
      </View>
    );
  }
}