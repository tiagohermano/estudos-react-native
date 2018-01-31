/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Post = ({}) => (
  <View style={styles.container}>
    <Text>{ post.title }</Text>
    <Text>{ post.description }</Text>
  </View>
);

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
