/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

import Post from './Post';

export default class List extends Component {
  state = {
    posts: [],
  }

  renderPosts = () => (
    <ScrollView>
      { this.state.posts.map(post =>
        <Post key={post.id} post={post} onDelete={this.deletePost} />
      )}
    </ScrollView>
  )

  addPost = () => {
    this.setState({
      posts: [
        ...this.state.posts,
        { id: Math.random(), title: 'Post Aleatório', description: 'Teste' }
      ],
    });
  }

  deletePost = (id) => {
    this.setState({
      posts: this.state.posts.filter(post => post.id ==! id),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        { this.state.posts.length > 0
          ? this.renderPosts()
          : <Text>Nenhum post</Text>
        }
        <Button title="Add post" onPress={this.addPost} />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
