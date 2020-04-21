import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Main({ navigation }) {
  const [firstAccess, setFirstAccess] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFirstAccess(false);
    }, 2000);
  });

  return (
    <View style={styles.container}>
      {firstAccess ? (
        <Text style={styles.text}>
          Ok! Agora que você já preencheu seu cadastro, vou liberar
          você para visualizar as ofertas. Seja bem vindo ao Agro Compras!
        </Text>
      ) : (
        <View>
          <Text style={styles.text}>
            Ainda não há ofertas disponíveis para sua região, tente novamente mais tarde. Quer sugerir um fornecedor?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Products')}
          >
            <Text style={styles.textClique}>
              Clique aqui!
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
