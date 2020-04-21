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
    fontSize: fonts.TITLE,
    color: colors.BLACK,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textClique: {
    fontSize: fonts.TITLE,
    color: colors.GREEN,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  containerOffers: {
    width: '100%',
    minHeight: 320,
    backgroundColor: colors.GREY_LIGTH,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 10,
    shadowColor: colors.BLACK,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    elevation: 5,
    marginBottom: 20,
  },
  textTitle: {
    color: colors.WHITE,
    fontSize: fonts.TITLE,
    fontWeight: 'bold',
  },
  buttonDetalhes: {
    width: '80%',
    height: 30,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.GREEN_BLACK,
    borderRadius: 5,
  },
  textButton: {
    fontSize: fonts.TITLE,
    color: colors.WHITE,
  },
  containerDetails: {
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: 40,
  },
  textDetailsVerde: {
    color: '#108110'
  },
  textDetails: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 2,
    color: '#4F4F4F',
  },
  containerButton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  containerText: {
  },
  containerTitle: {
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: 60,
    backgroundColor: colors.BLUE_BABY,
    shadowColor: colors.BLACK,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    elevation: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
