import { StyleSheet } from 'react-native';
import { colors, fonts } from '~/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    justifyContent: 'center',
    padding: 40,
  },
  button: {
    padding: 20,
    marginVertical: 10,
    justifyContent: 'center',
  },
  buttonFacebook: {
    backgroundColor: '#4267B2',
  },
  buttonGoogle: {
    backgroundColor: '#A52728',
  },
  buttonAccount: {
    backgroundColor: colors.GREEN_DARK,
  },
  buttonText: {
    textAlign: 'center',
    color: colors.WHITE,
    fontWeight: 'bold',
    fontSize: fonts.TITLE,
  }
});
