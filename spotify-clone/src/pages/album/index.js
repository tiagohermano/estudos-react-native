import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import Header from 'components/Header';
import SongList from 'components/SongList';
import { AlbumItem } from 'components/AlbumList/components/AlbumItem';

import styles from './styles';

const Album = (props) => {
  const { album } = props.navigation.state.params;

  return (
    <View style={styles.container}>
      <Header title="Album" backEnabled />
      <ScrollView
        style={styles.container}
        showVerticalScrollIndicator={false}
      >
        <Image
          style={styles.background}
          source={{ uri: album.thumbnail }}
          blurRadius={1}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{album.title}</Text>
            <Text style={styles.author}>{album.author}</Text>
          </View>
        </Image>

        <SongList
          title="Músicas do Album"
          songs={album.songs}
        />
      </ScrollView>
    </View>
  );
};

Album.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        album: PropTypes.shape(AlbumItem.propTypes.album),
      }),
    }),
  }).isRequired,
};

export default Album;
