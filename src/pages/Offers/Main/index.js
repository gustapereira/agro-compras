import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function Main() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Ok! Agora que você já preencheu seu cadastro, vou liberar
        você para visualizar as ofertas. Seja bem vindo ao Agro Compras!
      </Text>
    </View>
  );
}
