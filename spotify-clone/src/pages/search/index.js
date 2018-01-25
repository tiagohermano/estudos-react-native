import React from 'react';
import {
  View,
  TextInput,
} from 'react-native';
import Header from 'components/Header';
import styles from './styles';

const Search = () => (
  <View style={styles.container}>
    <Header>
      <TextInput style={{ backgroundColor: "#FFF" }} />
    </Header>
  </View>
);

export default Search;
