import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log({ usuario, senha });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('../IMG/width_500.webp')} style={styles.logo} />
      </View>

      {/* Campos de login */}
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={usuario}
          onChangeText={setUsuario}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <View style={styles.linksContainer}>
          <Text style={styles.link} onPress={() => console.log('Esqueci senha')}>
            Esqueci minha senha
          </Text>
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('Cadastro')}
          >
            Criar conta
          </Text>
        </View>

        <TouchableOpacity style={styles.botao} onPress={handleLogin}>
          <Text style={styles.botaoTexto}>Acessar</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerTitulo}>Acolha</Text>
        <Text style={styles.footerTexto}>Acolhendo vidas. Construindo Futuros</Text>
        <Text style={styles.footerCopyright}>
          © 2025 todos os direitos reservados. Acolha é uma marca registrada da Civitas Tech.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', // centraliza horizontalmente
    paddingVertical: 20,
    backgroundColor: '#f2f2f2',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  card: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginVertical: 10,
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  link: {
    color: '#357447',
    textDecorationLine: 'underline',
    fontSize: 12,
  },
  botao: {
    backgroundColor: '#357447',
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#357447', // cor do footer
    width: '100%',
  },
  footerTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  footerTexto: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 5,
  },
  footerCopyright: {
    color: '#ccc',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
});
