import { StyleSheet } from 'react-native';
import { colors, fonts } from './styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    alignSelf: 'stretch',
    padding: 20,
    borderRadius: 3,
    marginBottom: 20,
    marginTop: 20,
    marginHorizontal: 20,
  },

  title: {
    color: colors.primary,
    fontSize: fonts.regular,
  },
});

export default styles;
