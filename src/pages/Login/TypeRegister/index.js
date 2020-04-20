import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import Button from '~/components/Button';
import { colors } from '~/styles';

export default function TypeRegister() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Antes de prosseguirmos para seu cadastro, por favor nos ajude a entender seu objetivo.
        Na maior parte do tempo, você é um produtor rural, ou um fornecedor de insumos?
      </Text>
      <Button
        text="Sou Produtor Rural"
      />
      <Button
        text="Sou Fornecedor de Insumos"
        backgroundColor={colors.GREEN_DARK}
      />
    </View>
  );
}
