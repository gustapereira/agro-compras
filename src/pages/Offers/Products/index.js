import React, { useState, useEffect } from 'react';
import {
  SafeAreaView, KeyboardAvoidingView, Platform, View, Text, TouchableOpacity, ScrollView
} from 'react-native';

import styles from './styles';

export default function Products() {
  const [mock, setMock] = useState([
    {
      id: 0,
      title: 'Round-Up Ready',
      conteudo: '1,5l',
      pedido_minimo: '200',
      reservado: '453',
      expira: '03:20:15',
      fabricante: 'Monsanto',
      valor_original: '42,00',
      valor_final: '50,00'
    },
    {
      id: 1,
      title: 'Fosfato Natural',
      conteudo: '3,5l',
      pedido_minimo: '500',
      reservado: '953',
      expira: '07:25:45',
      fabricante: 'Fazenda Dois Irmãos',
      valor_original: '46,00',
      valor_final: '90,00'
    },
    {
      id: 2,
      title: 'Fosfato Natural',
      conteudo: '3,5l',
      pedido_minimo: '500',
      reservado: '953',
      expira: '07:25:45',
      fabricante: 'Fazenda Dois Irmãos',
      valor_original: '46,00',
      valor_final: '90,00'
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
                  Produto:
                  {' '}
                  {value.title}
                  !
                </Text>
              </View>
              <View style={styles.containerDetails}>
                <Text style={styles.textDetails}>
                  Conteúdo:
                  {' '}
                  {value.conteudo}
                </Text>
                <Text style={styles.textDetails}>
                  Pedido Mínimo:
                  {' '}
                  {value.pedido_minimo}
                  {' '}
                  unidades
                </Text>
                <Text style={styles.textDetails}>
                  Reservadas:
                  {' '}
                  <Text style={styles.textDetailsVerde}>
                    {value.reservado}
                    {' '}
                    unidades
                  </Text>
                </Text>
                <Text style={[styles.textDetails, { color: '#EC1D1D' }]}>
                  Promoção Expira em:
                  {' '}
                  {value.expira}
                </Text>
                <Text style={styles.textDetails}>
                  Fabricante:
                  {' '}
                  {value.fabricante}
                </Text>
                <Text style={[styles.textDetails, { color: '#909090' }]}>
                  Preço Original:
                  {' '}
                  R$
                  {value.valor_original}
                </Text>
                <Text style={[styles.textDetails, { color: '#FF6400' }]}>
                  Preço: R$
                  {value.valor_final}
                  {' '}
                  + Frete
                </Text>
              </View>
              <View style={styles.containerButton}>
                <TouchableOpacity style={styles.buttonDetalhes}>
                  <Text style={styles.textButton}>Ver Detalhes</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
