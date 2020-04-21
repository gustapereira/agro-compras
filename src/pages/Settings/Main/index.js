import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export default function Main() {
  return (
    <ScrollView contentContainerStyle={styles.contentScrollView}>
      <View style={styles.imageBackgroundOnboard}>

        <View style={styles.tituloProfiles}>
          <View style={styles.containerFoto}>
            <MaterialIcons name="directions-run" size={50} style={styles.FotoPerfil} />
          </View>
          <View style={styles.subTituloProfiles}>
            <Text style={styles.labelTitulo}>Gustavo Henrique Jardim Pereira</Text>
            <Text style={styles.subLabelTitulo}>gustapereira@gmail.com</Text>
          </View>
        </View>
        <View style={styles.bodyProfiles}>
          <TouchableOpacity style={styles.containerComponents}>
            <Text style={styles.textComponents}>Dados da Propriedade</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerComponents}>
            <Text style={styles.textComponents}>Dados Produtor Rural</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerComponents}>
            <Text style={styles.textComponents}>Dados Fornecedor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerComponents}>
            <Text style={styles.textComponents}>Sugerir uma Loja</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerComponents}>
            <Text style={styles.textComponents}>Fale Conosco</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerComponents}>
            <Text style={styles.textComponents}>Notificações</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
