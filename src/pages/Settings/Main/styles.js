import { StyleSheet } from 'react-native';
import { colors, fonts } from '~/styles';

const styles = StyleSheet.create({
  callBack: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  FotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
    color: colors.WHITE,
  },
  contentScrollView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  containerFoto: {
    width: 50,
    height: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  imageBackgroundOnboard: {
    width: '100%',
    minHeight: '100%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: colors.GREEN,
  },
  tituloProfiles: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subTituloProfiles: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  iconTitulo: {
    color: colors.WHITE,
    marginHorizontal: 10,
  },
  labelTitulo: {
    color: colors.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
  subLabelTitulo: {
    color: colors.WHITE,
    fontSize: 14,
  },
  bodyProfiles: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 40,
    marginBottom: 120,
  },
  titleSair: {
    color: colors.WHITE,
  },
  containerComponents: {
    width: '90%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#E8F3D8',
    marginTop: 20,
  },
  textComponents: {
    color: colors.WHITE,
    fontSize: 16,
  },
  containerRedeSocial: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  tituloSebrae: {
    color: colors.WHITE,
    fontSize: 11,
    fontStyle: 'italic',
    marginLeft: 10,
  },
  containerLogo: {
    width: 170,
    height: 30,
    marginLeft: 10,
  },
  IconeRedeSocial: {
    color: colors.WHITE,
    marginHorizontal: 3,
  },
});

export default styles;
