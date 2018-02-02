/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './store/actions';

const TodoList = ({ todos, addTodo }) => (
  <View style={styles.container}>
    { todos.map(todo => <Text key={todo.id}>{todo.text}</Text>) }

    <Button title="Add todo" onPress={addTodo} />
  </View>
);

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
