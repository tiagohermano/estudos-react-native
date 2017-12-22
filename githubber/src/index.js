import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import createRootNavigator from 'routes';

import 'config/ReactotronConfig';

export default class App extends Component {
  state = {
    userExists: false,
    userChecked: false,
  };

  componentWillMount() {
    // Checar se já existe um usuário
    this.checkUser().then((response) => {
      this.setState({ userExists: response, userChecked: true });
    });
  }

  checkUser = async () => {
    const user = await AsyncStorage.getItem('@Githubber:username');

    return user !== null;
  }

  render() {
    const { userChecked, userExists } = this.state;

    if (!userChecked) return null;

    const Layout = createRootNavigator(userExists);
    return <Layout />;
  }
}
