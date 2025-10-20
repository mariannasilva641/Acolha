import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';

export default function PerfilPF() {
  return (
    <ImageBackground
      source={require('../IMG/FundoAcolha.png')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Perfil - Pessoa Física</Text>
        <Text style={styles.text}>
          Esta é a página de perfil do usuário pessoa física. Aqui você pode visualizar informações pessoais, histórico de atividades e dados de contato.
        </Text>
        {/* Você pode adicionar mais seções de perfil aqui */}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, width: '100%', height: '100%' },
  container: { flexGrow: 1, padding: 20, alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#357447', marginBottom: 15 },
  text: { fontSize: 16, textAlign: 'justify', lineHeight: 22, color: 'black' },
});
