import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

const Post = ({ post, onDelete }) => (
  <View style={styles.container}>
    <Text>{ post.title }</Text>
    <Text>{ post.description }</Text>

    <Button title="Delete post" onPress={() => onDelete(post.id)} />
  </View>
);

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
