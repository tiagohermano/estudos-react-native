/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

import Post from './components/Post';
import Header from './components/Header';

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
      title: 'Acreano Dingo Dingo',
      author: 'Mestre Souza Mansur',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate voluptatum quam voluptates sapiente doloremque sequi? Commodi maiores voluptatibus excepturi? Tempora praesentium doloremque at dolorum quo earum dicta culpa quam. Vero!'
    },
    {
      id: 1,
      title: 'Isso é Chutambô',
      author: 'Mestre Souza Mansur',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate voluptatum quam voluptates sapiente doloremque sequi? Commodi maiores voluptatibus excepturi? Tempora praesentium doloremque at dolorum quo earum dicta culpa quam. Vero!'
    },
    {
      id: 2,
      title: 'Chutambô é arte egoísta',
      author: 'Mestre Souza Mansur',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate voluptatum quam voluptates sapiente doloremque sequi? Commodi maiores voluptatibus excepturi? Tempora praesentium doloremque at dolorum quo earum dicta culpa quam. Vero!'
    },
    {
      id: 3,
      title: 'Pintar as ruas de sangue',
      author: 'Mestre Souza Mansur',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate voluptatum quam voluptates sapiente doloremque sequi? Commodi maiores voluptatibus excepturi? Tempora praesentium doloremque at dolorum quo earum dicta culpa quam. Vero!'
    },
    {
      id: 1,
      title: 'Esporte do corpo e da mente',
      author: 'Mestre Souza Mansur',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate voluptatum quam voluptates sapiente doloremque sequi? Commodi maiores voluptatibus excepturi? Tempora praesentium doloremque at dolorum quo earum dicta culpa quam. Vero!'
    },
    {
      id: 2,
      title: 'Chutambô é 100% Jesus',
      author: 'Mestre Souza Mansur',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate voluptatum quam voluptates sapiente doloremque sequi? Commodi maiores voluptatibus excepturi? Tempora praesentium doloremque at dolorum quo earum dicta culpa quam. Vero!'
    },
    {
      id: 3,
      title: 'Tirar nossas criança de trás das grades, ISSO É CHUTAMBÔ',
      author: 'Mestre Souza Mansur',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate voluptatum quam voluptates sapiente doloremque sequi? Commodi maiores voluptatibus excepturi? Tempora praesentium doloremque at dolorum quo earum dicta culpa quam. Vero!'
    },
  ]
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView>
          {this.state.posts.map(post => <Post post={post} key={post.id}/>)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ef8484'
  },
});
