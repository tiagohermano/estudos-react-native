import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: metrics.statusBarHeight,
    paddingHorizontal: metrics.baseMargin,
    height: metrics.navBarHeight + metrics.statusBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darker,
    flexDirection: 'row',
  },

  title: {
    color: colors.white,
    fontSize: fonts.regular,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default styles;
