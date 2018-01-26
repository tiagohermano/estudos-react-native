import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import styles from './styles';

const Player = () => (
  <View style={styles.container}>
    <View style={styles.content}>

      <View style={styles.leftContent}>
        <Image
          style={styles.thumbnail}
          source={{ uri: 'https://ainhoaaristizabal.files.wordpress.com/2013/12/imagine-dragons-night-visions-album-cover-640x6' }}
        />
        <View style={styles.current}>
          <Text style={styles.title}>Música tocando</Text>
          <Text style={styles.description}>Imagine Dragons</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => {}}>
        <Icon name="controller-play" size={20} color="#FFF" />
      </TouchableOpacity>

    </View>
  </View>
);

export default Player;
