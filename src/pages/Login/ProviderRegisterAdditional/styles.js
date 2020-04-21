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
    marginTop: 10,
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
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: 20,
  },
  mainContent: {
    flex: 1,
    width: '100%',
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fff',
  },
  modalCard: {
    marginTop: 30,
    height: 200,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  titleCompartilhar: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  textCompartilhar: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginHorizontal: 80,
    marginTop: 40,
  },
  containerButtonModal: {
    flexDirection: 'row',
    marginTop: 10,
    width: '60%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.ORANGE,
    width: '60%',
    height: 40,
    marginTop: 40,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  wrapperButtonAzul: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    borderColor: colors.BLUE,
    borderWidth: 1,
    width: '60%',
    height: 40,
    marginTop: 40,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  textButtonModal: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textButtonModalAzul: {
    color: colors.BLUE,
    fontSize: 18,
    fontWeight: 'bold',
  }
});
