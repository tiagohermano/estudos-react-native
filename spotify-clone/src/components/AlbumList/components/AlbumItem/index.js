import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

import styles from './styles';

export default class AlbumItem extends Component {
  static propTypes = {
    album: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      author: PropTypes.string,
      thumbnail: PropTypes.string,
    }).isRequired,
    style: View.propTypes.style,
  };

  static defaultProps = {
    style: {},
  };

  render() {
    return (
      <TouchableOpacity
        style={[styles.container, this.props.style]}
        onPress={() => {}}
        activeOpacity={0.6}
      >
        <Image
          style={styles.image}
          source={{ uri: this.props.album.thumbnail }}
        />

        <Text style={styles.title}>{this.props.album.title}</Text>
        <Text style={styles.description}>{this.props.album.author}</Text>
      </TouchableOpacity>
    );
  }
}
