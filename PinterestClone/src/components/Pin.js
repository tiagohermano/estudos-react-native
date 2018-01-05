import React, { Component } from 'React';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import {
  PinIcon,
} from '../util/icons';

import UtilityNavButton from './UtilityNavButton';
import Button from './Button';
import LocalImage from './LocalImage';

export default class Pin extends Component {
  render() {
    return (
      <View style={styles.PinContainer}>

        <View style={styles.PinHeader}>
          <View style={styles.utilityNav}>
            <UtilityNavButton icon="Back"/>
            <UtilityNavButton icon="Heart"/>
            <UtilityNavButton icon="Share"/>
            <UtilityNavButton icon="More"/>
          </View>
          <View style={styles.PinButtonContainer}>
            <Button red icon text="Save"/>
          </View>
        </View>

        <View style={styles.PinContent}>
          <LocalImage
            source={require('../assets/images/redmi5-1.png')}
            originalWidth={1400}
            originalHeight={788}
            />
        </View>

        <View style={styles.PinMeta}>
          <View style={styles.PinMetaTextContainer}>
            <Text style={styles.PinMetaText}>Saved from</Text>
            <Text style={[styles.PinMetaText, styles.TextBold]}>website.com</Text>
          </View>
          <View style={styles.PinButtonContainer}>
            <Button text="Visit"/>
          </View>
        </View>

        <View style={styles.PinUser}>
          <View style={styles.PinUserAvatar}>

          </View>
          <View style={styles.PinUserContainer}>
            <Text style={styles.PinUserText}>
              <Text style={styles.TextBold}>User Name </Text>saved to <Text style={styles.TextBold}>space</Text>
            </Text>
            <Text style={styles.PinUserText}>Description Lorem Ipsum</Text>
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  PinContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignSelf: 'stretch',
  },
  PinHeader: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'flex-end', // VERTICAL
    justifyContent: 'space-between',
    height: 66,
    padding: 8,
  },
  utilityNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  PinButton: {
    flexDirection: 'row',
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 6,
    justifyContent: 'space-between',
    width: 60,
  },
  PinButtonText: {
    color: 'white',
  },
  PinButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  PinContent: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
  ImagePlaceholder: {
    backgroundColor: '#1e1e1e',
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 6,
  },
  PinMeta: {
    flex: 2,
    flexDirection: 'row',
    paddingTop: 16,
    paddingRight: 8,
    paddingBottom: 16,
    paddingLeft: 8,
  },
  PinMetaTextContainer: {

  },
  UtilityButton: {
    backgroundColor: '#cecece',
    alignItems: 'center',
    justifyContent: 'center',
  },
  UtilityButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  PinUser: {
    flex: 5,
    flexDirection: 'row',
    paddingLeft: 8,
    paddingRight: 8,
  },
  PinUserAvatar: {
    backgroundColor: 'black',
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8,
  },
  TextBold: {
    fontWeight: 'bold',
  },
})
