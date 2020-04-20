import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.buttonFacebook]}
      >
        <Text style={styles.buttonText}>Fazer login com Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.buttonGoogle]}
      >
        <Text style={styles.buttonText}>Fazer login com Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('TypeRegister')}
        style={[styles.button, styles.buttonAccount]}
      >
        <Text style={styles.buttonText}>Criar uma conta</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
      >
        <Text style={[styles.buttonText, { color: '#000' }]}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
}
