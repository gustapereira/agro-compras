import React, { useState } from 'react';
import {
  SafeAreaView, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, Image, Platform, View
} from 'react-native';
import Input from '~/components/Input';
import Button from '~/components/Button';

import styles from './styles';

export default function ProviderRegister({ navigation }) {
  const [nameResponsavel, setNameResponsavel] = useState('');
  const [nameResponsavelLoja, setNameResponsavelLoja] = useState('');
  const [phoneComercial, setPhoneComercial] = useState('');
  const [phoneCelular, setPhoneCelular] = useState('');
  const [registroProfissional, setRegistroProfissional] = useState('');
  const [email, setEmail] = useState('');
  const [cnpj, setCNPJ] = useState('');
  const [enderecoComercial, setEnderecoComercial] = useState('');
  const [areaFazenda, setAreaFazenda] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [nomeFantasia, setNomeFantasia] = useState('');
  const [cep, setCep] = useState('');

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
          <Text style={styles.textHeader}>Cadastro Fornecedor</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scroll}>
          <Input
            title="Nome do Responsavel"
            value={nameResponsavel}
            placeholder="Seu nome aqui..."
            onChangeText={(text) => setNameResponsavel(text)}
          />
          <Input
            title="Telefone Comercial"
            placeholder="(xx)xxxxx-xxxx"
            value={phoneComercial}
            onChangeText={(text) => setPhoneComercial(text)}
          />
          <Input
            title="Telefone Celular"
            placeholder="(xx)xxxxx-xxxx"
            value={phoneCelular}
            onChangeText={(text) => setPhoneCelular(text)}
          />
          <Input
            title="Email"
            placeholder="ex: seuemail@email.com.br"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            title="CNPJ"
            placeholder="123.456.789/00001-92"
            value={cnpj}
            onChangeText={(text) => setCNPJ(text)}
          />
          <Input
            title="Nome Fantasia"
            placeholder="Coloque aqui o nome da sua loja..."
            value={nomeFantasia}
            onChangeText={(text) => setNomeFantasia(text)}
          />
          <Input
            title="Área da Fazenda - Essa nao faz sentido"
            placeholder="ex: 92ha"
            value={areaFazenda}
            onChangeText={(text) => setAreaFazenda(text)}
          />
          <Input
            title="Responsavel Técnico pela Loja"
            value={nameResponsavelLoja}
            placeholder="João Carlos"
            onChangeText={(text) => setNameResponsavelLoja(text)}
          />
          <Input
            title="Registro Profissional do R.T."
            value={registroProfissional}
            placeholder="123456/Crea-DF"
            onChangeText={(text) => setRegistroProfissional(text)}
          />
          <Input
            title="Endereço Comercial"
            placeholder="Rua Cascavel 123, Paracatu - MG"
            value={enderecoComercial}
            onChangeText={(text) => setEnderecoComercial(text)}
          />
          <Input
            title="CEP"
            placeholder="12.345-678"
            value={cep}
            onChangeText={(text) => setCep(text)}
          />
          <Input
            title="Município"
            placeholder="Paracatu - MG"
            value={municipio}
            onChangeText={(text) => setMunicipio(text)}
          />
          <Button
            onPress={() => navigation.navigate('ProviderRegisterAdditional')}
            text="Cadastrar Minha Revenda"
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
