import React, { useState } from 'react';
import {
  SafeAreaView, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, Image, Platform, View
} from 'react-native';
import Input from '~/components/Input';
import Button from '~/components/Button';

import styles from './styles';
import SelectionItem from '~/components/SelectionItem';

export default function RuralRegister({ navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [area, setArea] = useState('');
  const [address, setAddress] = useState('');
  const [activities, setActivites] = useState([
    { id: 0, text: 'Grãos', selected: false },
    { id: 1, text: 'Hortaliças', selected: false },
    { id: 2, text: 'Pecuária de corte', selected: false },
    { id: 3, text: 'Silvicultura', selected: false },
    { id: 4, text: 'Piscicultura', selected: false },
    { id: 5, text: 'Apicultura', selected: false },
    { id: 6, text: 'Suinos', selected: false },
    { id: 7, text: 'Aves', selected: false },
  ]);
  const [technicalManager, setTechnicalManager] = useState([
    { id: 0, text: 'Sim', selected: false },
    { id: 1, text: 'Não, uso o do fornecedor', selected: false },
  ]);


  function onPressActivitie({ id }) {
    const newState = activities.map((item) => {
      if (item.id === id) {
        return { ...item, selected: !item.selected };
      }
      return item;
    });
    setActivites(newState);
  }

  function onPressTechnicalManager({ id }) {
    const newState = technicalManager.map((item) => {
      if (item.id === id) {
        return { ...item, selected: true };
      }
      return { ...item, selected: false };
    });
    setTechnicalManager(newState);
  }


  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled style={{ flex: 1 }}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Cadastro Produtor Rural</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scroll}>
          <Input
            title="Nome"
            value={name}
            placeholder="Seu nome aqui..."
            onChangeText={(text) => setName(text)}
          />
          <Input
            title="Telefone"
            placeholder="(xx)xxxxx-xxxx"
            value={phone}
            onChangeText={(text) => setPhone(text)}
          />
          <Input
            title="Email"
            placeholder="ex: seuemail@email.com.br"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            title="Área da fazenda"
            placeholder="ex: 92ha"
            value={area}
            onChangeText={(text) => setArea(text)}
          />
          <Text style={styles.title}>Atividades de interesse</Text>
          {activities.map((item) => (
            <SelectionItem
              key={item.id}
              selected={item.selected}
              text={item.text}
              id={item.id}
              onPress={onPressActivitie}
            />
          ))}
          <Text style={styles.title}>Possui Responsável Técnico?</Text>
          {technicalManager.map((item) => (
            <SelectionItem
              key={item.id}
              selected={item.selected}
              text={item.text}
              id={item.id}
              onPress={onPressTechnicalManager}
              type="circle"
            />
          ))}
          <Input
            title="Endereço da fazenda"
            placeholder="Rodovia DF 140, Km 14 -  Fazenda 2  Irmãos - Gleba 6, Brasília - DF"
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
          <Text style={styles.title}>Localização no Mapa</Text>
          <TouchableOpacity style={styles.containerLocation}>
            <Image
              style={styles.location}
              source={{ uri: 'https://khms0.googleapis.com/kh?v=865&hl=pt-BR&x=2942&y=4805&z=13' }}
            />
          </TouchableOpacity>
          <Button
            onPress={() => navigation.navigate('Dashboard')}
            text="Cadastrar Minha Propriedade"
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
