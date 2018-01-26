import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';

import AlbumItem from './components/AlbumItem';

export default class AlbumList extends Component {
  static propTypes = {
    title: PropTypes.string,
    loading: PropTypes.bool,
    albums: PropTypes.arrayOf(
      AlbumItem.propTypes.album,
    ).isRequired,
  };

  static defaultProps = {
    title: 'Albums',
    loading: false,
  };

  renderContent = () => (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      { this.props.albums.map((album, index) => (
        <AlbumItem
          key={album.id}
          style={[
            styles.listItem,
            (index === 0) ? styles['listItem-first'] : {},
            (index === (this.props.albums.length - 1)) ? styles['list-item-last'] : {},
          ]}
          album={album}
        />
      )) }
    </ScrollView>
  );

  render() {
    return (
      <View style={[styles.section, styles.listSection]}>
        <Text style={styles.sectionTitle}>{this.props.title}</Text>

        { this.props.loading
          ? <ActivityIndicator size="small" color="#FFF" />
          : this.renderContent() }
      </View>
    );
  }
}
