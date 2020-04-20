import { StyleSheet } from 'react-native';
import { colors, fonts } from '~/styles';

export default StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.ORANGE,
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: colors.BLACK,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    marginTop: 16,
  },
  text: {
    color: colors.WHITE,
    fontWeight: 'bold',
    fontSize: fonts.TITLE,
  }
});
