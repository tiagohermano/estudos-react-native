import React, { Component } from 'react';
import api from 'services/api';

import { View, Text, AsyncStorage, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

import Repository from './components/Repository';

export default class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="list-alt" size={20} color={tintColor} />
    ),
  };

  state = {
    repositories: [],
    loading: false,
  };

  componentWillMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    this.setState({ loading: true });

    const username = await AsyncStorage.getItem('@Githubber:username');
    const response = await api.get(`/users/${username}/repos`);

    this.setState({ repositories: response.data, loading: false });
  };

  renderRepositories = () => (
    this.state.repositories.map(repository => (
      <Repository key={repository.id} repository={repository} />
    ))
  );

  renderList = () => (
    this.state.repositories.length
      ? this.renderRepositories()
      : <Text style={styles.empty}>Nenhum repositório encontado</Text>
  );

  render() {
    return (
      <View style={styles.container}>
        { this.state.loading
          ? <ActivityIndicator size="small" color="#999"/>
          : this.renderList() }

      </View>
    );
  }
}
