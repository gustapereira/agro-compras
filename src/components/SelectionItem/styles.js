import { StyleSheet } from 'react-native';
import { colors, fonts } from '~/styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 4,
    alignItems: 'center'
  },
  containerSelection: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECECEC'
  },
  text: {
    color: colors.BLACK,
    fontWeight: 'bold',
    marginLeft: 8,
    fontSize: fonts.TITLE,
  }
});
