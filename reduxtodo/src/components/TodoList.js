import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

import * as todoActions from '../actions/todos';

import TodoItem from './TodoItem';

class TodoList extends Component {
  state = {
    newTodoText: '',
  };

  newTodo = () => {
    this.props.addTodo(this.state.newTodoText);
    this.setState({ newTodoText: '' });
  };

  render() {
    console.log(this.props);

    return (
      <View style={{ padding: 40 }}>
        <TextInput
          placeholder='Digite seu todo'
          value={this.state.newTodoText}
          onChangeText={(text) => { this.setState({ newTodoText: text }) }}
        />
        <TouchableOpacity onPress={this.newTodo}>
          <Text>Adicionar novo todo</Text>
        </TouchableOpacity>

        { this.props.todos.map(todo => (
          <TodoItem key={todo.id} title={todo.text} />
        )) }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(todoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
