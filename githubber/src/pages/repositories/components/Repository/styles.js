import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    alignSelf: 'stretch',
    padding: 20,
    borderRadius: 3,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    marginBottom: 20,
  },

  title: {
    color: colors.primary,
    fontSize: fonts.regular,
  },

  infoContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },

  info: {
    flexDirection: 'row',
    marginRight: 10,
    alignItems: 'center',
  },

  infoIcon: {
    color: colors.dark,
  },

  infoText: {
    color: colors.dark,
    fontSize: fonts.small,
    marginLeft: 5,
  },
});

export default styles;
