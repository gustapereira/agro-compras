import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

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
          Ainda não há demandas em aberto para produtos que você vende. Não se preocupe, chegando uma demanda, nós te avisaremos!
        </Text>
      ) : (
        navigation.navigate('Proposal')
      )}
    </View>
  );
}
