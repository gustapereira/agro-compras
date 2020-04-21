import React, { useState, useEffect } from 'react';
import {
  SafeAreaView, KeyboardAvoidingView, Platform, View, Text, TouchableOpacity, ScrollView
} from 'react-native';

import styles from './styles';

export default function Proposal() {
  const [mock, setMock] = useState([
    {
      id: 2134,
      title: 'Fosfato Natural',
      quantidade: '400 ton',
      entregar: 'Fazenda Dois Irmãos',
      proposta: '04/02/20',
      requisito_minimo: '12% P2O5',
      municipio: 'Cascavel-PR',
      forma_pagamento: 'A negociar',
      qtd_proposta: '3'
    },
    {
      id: 4321,
      title: 'Glifosato',
      quantidade: '300 litros',
      entregar: 'Fazenda Dois Irmãos',
      proposta: '05/02/20',
      requisito_minimo: 'n/a',
      municipio: 'Cascavel-PR',
      forma_pagamento: 'A negociar',
      qtd_proposta: '0'
    },
  ]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setFirstAccess(false);
  //   }, 2000);
  // });

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {mock.map((value, index) => (
            <View style={styles.containerOffers}>
              <View style={styles.containerTitle}>
                <Text style={styles.textTitle}>
                  Orçamento #
                  {value.id}
                  :
                  {' '}
                  {value.title}
                  !
                </Text>
              </View>
              <View style={styles.containerDetails}>
                <Text style={styles.textDetails}>
                  Quantidade:
                  {' '}
                  {value.quantidade}
                </Text>
                <Text style={styles.textDetails}>
                  Entrega:
                  {' '}
                  {value.entregar}
                </Text>
                <Text style={[styles.textDetails, { color: '#EC1D1D' }]}>
                  Recebendo proposta até:
                  {' '}
                  {value.proposta}
                </Text>
                <Text style={styles.textDetails}>
                  Requisito Mínimo:
                  {' '}
                  {value.requisito_minimo}
                </Text>
                <Text style={styles.textDetails}>
                  Município:
                  {' '}
                  {value.municipio}
                </Text>
                <Text style={styles.textDetails}>
                  Forma de Pagamento:
                  {' '}
                  {value.forma_pagamento}
                </Text>
                <Text style={styles.textDetails}>
                  Proposta Recebida:
                  {' '}
                  {value.qtd_proposta}
                </Text>
              </View>
              <View style={styles.containerButton}>
                <TouchableOpacity style={styles.buttonDetalhes}>
                  <Text style={styles.textButton}>Ver Proposta</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
