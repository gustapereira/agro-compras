import { StyleSheet } from 'react-native';
import { colors, fonts } from '~/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  header: {
    alignItems: 'center',
    padding: 10,
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: fonts.TITLE,
    color: colors.BLACK
  },
  scroll: {
    paddingHorizontal: 16,
    paddingBottom: 16
  },
  title: {
    color: colors.BLACK,
    fontWeight: 'bold',
    fontSize: fonts.TITLE,
    marginBottom: 5,
    marginTop: 20,
  },
  containerLocation: {
    height: 200,
    borderRadius: 10,
    overflow: 'hidden'
  },
  location: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: 'cover'
  }
});
