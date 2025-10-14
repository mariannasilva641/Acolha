import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CadastroPF() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nacionalidade, setNacionalidade] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const handleCadastrar = () => {
    console.log({ nome, email, senha, cpf, telefone, nacionalidade, dataNascimento });
  };

  return (
    <ImageBackground
      source={require('../IMG/FundoCadastro.jpeg')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Botão de Voltar */}
        <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate('home')}>
          <Text style={styles.textoVoltar}>← Voltar à Página Inicial</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>Tela de Cadastro - Pessoa Física</Text>

        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />

          <TextInput
            style={styles.input}
            placeholder="CPF"
            value={cpf}
            onChangeText={setCpf}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.input}
            placeholder="Telefone"
            value={telefone}
            onChangeText={setTelefone}
            keyboardType="phone-pad"
          />

          <TextInput
            style={styles.input}
            placeholder="Nacionalidade"
            value={nacionalidade}
            onChangeText={setNacionalidade}
          />

          <TextInput
            style={styles.input}
            placeholder="Data de Nascimento"
            value={dataNascimento}
            onChangeText={setDataNascimento}
          />

          <TouchableOpacity style={styles.botao} onPress={handleCadastrar}>
            <Text style={styles.botaoTexto}>Cadastrar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerTitulo}>Acolha</Text>
          <Text style={styles.footerTexto}>Acolhendo vidas. Construindo Futuros</Text>
          <Text style={styles.footerCopyright}>
            © 2025 todos os direitos reservados. Acolha é uma marca registrada da Civitas Tech.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  botaoVoltar: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 10,
    backgroundColor: '#357447',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  textoVoltar: {
    color: '#fff',
    fontWeight: 'bold',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#357447',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    width: '90%',
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
  },
  botao: {
    backgroundColor: '#357447',
    padding: 15,
    borderRadius: 6,
    marginTop: 10,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  footerTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#357447',
  },
  footerTexto: {
    color: '#555',
    textAlign: 'center',
    marginVertical: 5,
  },
  footerCopyright: {
    color: '#888',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
});
