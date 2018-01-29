import React, { Component } from 'react';
import {
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import SongList from 'components/SongList';
import Header from 'components/Header';
import styles from './styles';

export default class Search extends Component {
  state = {
    searchText: '',
  };

  inputChangedText = (searchText) => {
    this.setState({ searchText });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar músicas"
            placeholderTextColor="#999"
            onChangeText={this.inputChangedText}
            underlineColorAndroid="transparent"
          />
        </Header>

        <ScrollView
          style={styles.container}
          showVerticalScrollIndicator={false}
        >
          <SongList
            showTitle={false}
            songs={[]}
          />

        </ScrollView>
      </View>
    );
  }
}
