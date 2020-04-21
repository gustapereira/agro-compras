import React, { useState } from 'react';
import {
  SafeAreaView, KeyboardAvoidingView, ScrollView, Text, Platform, View, TouchableOpacity, Modal
} from 'react-native';
import Button from '~/components/Button';

import styles from './styles';
import SelectionItem from '~/components/SelectionItem';

export default function ProviderRegister({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [activities, setActivites] = useState([
    { id: 0, text: 'Fertilizantes', selected: false },
    { id: 1, text: 'Defensivos', selected: false },
    { id: 2, text: 'Calcário e Gesso', selected: false },
    { id: 3, text: 'Sementes', selected: false },
    { id: 4, text: 'Ração', selected: false },
    { id: 5, text: 'Suplementos', selected: false },
    { id: 6, text: 'Minerais', selected: false },
    { id: 7, text: 'Medicamentos', selected: false },
    { id: 8, text: 'Mudas', selected: false },
    { id: 9, text: 'Ferramentas', selected: false },
    { id: 10, text: 'Máquinas', selected: false },
    { id: 11, text: 'Arames e Telas', selected: false },
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

  function renderModalDiag() {
    return (
      <View>
        <Modal animationType="slide" transparent visible={modalVisible}>
          <SafeAreaView style={styles.modalContainer}>
            <View style={styles.mainContent}>
              <View style={styles.modalCard}>
                <Text style={styles.textCompartilhar}>
                  Confirmar fornecimento destes produtos?
                </Text>
                <View style={styles.containerButtonModal}>
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(false);
                    }}
                    style={styles.wrapperButtonAzul}
                  >
                    <Text style={styles.textButtonModalAzul}>Voltar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Dashboard');
                      setModalVisible(false);
                    }}
                    style={styles.wrapperButton}
                  >
                    <Text style={styles.textButtonModal}>Confirmar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {modalVisible && renderModalDiag()}
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled style={{ flex: 1 }}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Cadastro Fornecedor</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scroll}>
          <Text style={styles.title}>Ok! Sua empresa fornecedora está em análise e em breve será liberada após aprovação. Enquanto isso, vamos cadastrar que tipo de produtos você vende?</Text>
          {activities.map((item) => (
            <SelectionItem
              key={item.id}
              selected={item.selected}
              text={item.text}
              id={item.id}
              onPress={onPressActivitie}
            />
          ))}
          <Button
            onPress={() => setModalVisible(true)}
            text="Registrar como Fornecedor"
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
