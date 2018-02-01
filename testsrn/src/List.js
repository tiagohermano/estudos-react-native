/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  Button,
  AsyncStorage,
  StyleSheet,
} from 'react-native';

import Post from './Post';

export default class List extends Component {
  state = {
    posts: [],
  }

  async componentDidMount() {
    const posts = JSON.parse(await AsyncStorage.getItem('@testsrn:posts')) || [];

    this.setState({ posts });
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

  savePosts = async () => {
    await AsyncStorage.setItem('@testsrn:posts', JSON.stringify(this.state.posts));
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
        <Button id="new" title="Add post" onPress={this.addPost} />
        <Button id="save" title="Save posts" onPress={this.savePosts} />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
