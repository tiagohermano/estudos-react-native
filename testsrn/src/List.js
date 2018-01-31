/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Post from './Post';

const List = ({ posts }) => (
  <View style={styles.container}>
    { posts.length > 0
      ? posts.map(post => <Post key={post.id} post={post} />)
      : <Text>Nenhum post</Text>
    }
  </View>
);

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
