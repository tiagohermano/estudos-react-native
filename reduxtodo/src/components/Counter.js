import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

class Counter extends Component {
  render() {
    return (
      <View>
        <Text>Você tem {this.props.todos.length} todos.</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Counter);
