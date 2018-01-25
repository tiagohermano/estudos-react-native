import React from 'react';
import {
  View,
} from 'react-native';

import NavigationTabs from './components/NavigationTabs';

import styles from './styles';

const Footer = props => (
  <View style={styles.footerContainer}>
    <NavigationTabs {...props} />
  </View>
);

export default Footer;
