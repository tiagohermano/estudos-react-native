import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

import SongItem from './components/SongItem';

export default class SongList extends Component {
  static propTypes = {
    title: PropTypes.string,
    songs: PropTypes.arrayOf(
      SongItem.propTypes.song,
    ).isRequired,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    title: 'Músicas',
    loading: false,
  };

  renderEmpty = () => (
    <Text style={styles.emptyList}>Nenhuma música encontrada</Text>
  );

  renderList = () => (
    <FlatList
      data={this.props.songs}
      renderItem={this.renderSong}
      keyExtractor={song => song.id}
    />
  );

  renderSong = ({ item, index }) => (
    <SongItem
      style={[
        styles.listItem,
        (index === 0) ? styles['listItemFirst'] : {},
      ]}
      onPress={() => {}}
      song={item}
    />
  );

  renderContent = () => (
    this.props.songs.length === 0
      ? this.renderEmpty()
      : this.renderList()
  );

  render() {
    return (
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, styles.listSectionTitle]}>
          { this.props.title }
        </Text>

        { this.props.loading
          ? <ActivityIndicator size="small" color="#FFF" />
          : this.renderContent()}
      </View>
    );
  }
}
