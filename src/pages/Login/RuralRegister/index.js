import React, { useState } from 'react';
import {
  View, SafeAreaView, KeyboardAvoidingView, ScrollView
} from 'react-native';
import Input from '~/components/Input';

import styles from './styles';

export default function RuralRegister() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [area, setArea] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <Input
            title="Nome"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <Input
            title="Telefone"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <Input
            title="Email"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <Input
            title="Nome"
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
