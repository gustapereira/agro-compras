import { StyleSheet } from 'react-native';
import { colors, fonts } from '~/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: fonts.TITLE,
    marginBottom: 5,
    marginTop: 20,
  },
  input: {
    backgroundColor: '#EEE',
    padding: 10,
  }
});
