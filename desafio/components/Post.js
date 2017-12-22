import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Post = ({ post }) => (
  <View style={styles.postContainer}>
    <Text style={styles.title}>{post.title}</Text>
    <Text style={styles.author}>{post.author}</Text>
    <Text style={styles.description}>{post.description}</Text>
  </View>
);

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    margin: 20,

    shadowColor: '#DA6C6C',
    shadowRadius: 5,
    shadowOffset: {x: 0, y:2},
    shadowOpacity: 1
  },

  title: {
    color: '#333',
    fontWeight: 'bold',
  },

  author: {
    color: '#999999'
  },

  description: {
    color: '#666666'
  }
});

export default Post;
