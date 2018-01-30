import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';

/* Redux */
import { connect } from 'react-redux';
import PlayerActions from 'store/ducks/player';

import SongItem from './components/SongItem';

import styles from './styles';

export class SongList extends Component {
  static propTypes = {
    title: PropTypes.string,
    songs: PropTypes.arrayOf(
      SongItem.propTypes.song,
    ).isRequired,
    loading: PropTypes.bool,
    showTitle: PropTypes.bool,
    playerSetSongRequest: PropTypes.func.isRequired,
  };

  static defaultProps = {
    title: 'Músicas',
    loading: false,
    showTitle: true,
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
      onPress={() => { this.props.playerSetSongRequest(item, this.props.songs); }}
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
        { this.props.showTitle &&
          <Text style={[styles.sectionTitle, styles.listSectionTitle]}>
            { this.props.title }
          </Text>
        }

        { this.props.loading
          ? <ActivityIndicator size="small" color="#FFF" />
          : this.renderContent()}
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  playerSetSongRequest: (song, list) =>
    dispatch(PlayerActions.playerSetSongRequest(song, list)),
});

export default connect(null, mapDispatchToProps)(SongList);
