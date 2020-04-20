import { StyleSheet } from 'react-native';
import { colors, fonts } from '~/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    justifyContent: 'center',
    padding: 30,
  },
  text: {
    color: colors.BLACK,
    fontSize: fonts.TITLE,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});
