import { StyleSheet } from 'react-native';
import { colors, fonts } from '~/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  text: {
    fontSize: fonts.TITLE,
    color: colors.BLACK,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
