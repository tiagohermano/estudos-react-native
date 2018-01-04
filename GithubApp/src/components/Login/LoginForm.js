import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <TextInput
          placeholder="username or email"
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCapitalize={false}
          autoCorrect={false}
          style={styles.input}
         />
         <TextInput
           secureTextEntry
           placeholder="password"
           returnKeyType="go"
           style={styles.input}
           ref={(input) => this.passwordInput = input}
          />
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },

  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10,
  },

  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
  },

  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  }
});
