import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Post = ({ post }) =>  (
  <View style={styles.postContainer}>
    <Text style={styles.title}>{post.title}</Text>
    <Text style={styles.description}>{post.description}</Text>
  </View>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 20,
  },

  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },

  description: {
    fontSize: 14,
    color: '#fff',
    marginTop: 10,
  }
});

export default Post;
