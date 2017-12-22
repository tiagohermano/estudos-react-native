/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Button,
} from 'react-native';

import './config/ReactotronConfig';
import Post from './components/Post';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  state = {
    posts: [
      {
        id: 0,
        title: 'Isso é Chutambô',
        description: 'Abre portas na sua vida',
      },
      {
        id: 1,
        title: 'Mestre Souza Mansur',
        description: 'Mestre Chutambô',
      },
    ],
  };

  addNewPost = () => {
    this.setState({
      posts: [
        ...this.state.posts,
        {
          id: Math.random(),
          title: 'Adicionando novo post',
          description: 'Nova descrição',
        },
      ],
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.posts.map(post => <Post post={post} key={post.id}/>)}
        <Button title='Adicionar post' onPress={this.addNewPost} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    padding: 40,
  },
});
