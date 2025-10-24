import React, { useState } from 'react';
import { 
  View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground 
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

export default function EditarPerfilPF() {
  const navigation = useNavigation();
  const route = useRoute();

  const [nome, setNome] = useState(route.params?.nome || '');
  const [email, setEmail] = useState(route.params?.email || '');
  const [telefone, setTelefone] = useState(route.params?.telefone || '');
  const [cpf, setCpf] = useState(route.params?.cpf || '');
  const [nacionalidade, setNacionalidade] = useState(route.params?.nacionalidade || '');
  const [dataNascimento, setDataNascimento] = useState(route.params?.dataNascimento || '');

  const handleSalvar = () => {
    Toast.show({
      type: 'success',
      text1: '✅ Sucesso',
      text2: 'As informações foram atualizadas com sucesso!',
      position: 'top',
      visibilityTime: 2000,
      fontFamily:'Questrial-Regular',
    });

    navigation.navigate('perfilPF', {
      nome,
      email,
      telefone,
      cpf,
      nacionalidade,
      dataNascimento,
    });
  };

  const handleCancelar = () => {
    Toast.show({
      type: 'info',
      text1: 'Cancelado',
      text2: 'As alterações não foram salvas.',
      position: 'top',
      visibilityTime: 2000,
      fontFamily:'Questrial-Regular',
    });

    navigation.goBack();
  };

  return (
    <ImageBackground
      source={require('../../IMG/FundoCadastro.jpeg')}
      style={styles.background}
    >
      <View style={styles.overlayContainer}>
        <Text style={styles.title}>Editar Perfil</Text>

        <View style={styles.formContainer}>
          <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholder="Nome" />
          <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Email" />
          <TextInput style={styles.input} value={telefone} onChangeText={setTelefone} placeholder="Telefone" />
          <TextInput style={styles.input} value={cpf} onChangeText={setCpf} placeholder="CPF" />
          <TextInput style={styles.input} value={nacionalidade} onChangeText={setNacionalidade} placeholder="Nacionalidade" />
          <TextInput style={styles.input} value={dataNascimento} onChangeText={setDataNascimento} placeholder="Data de Nascimento" />

          <TouchableOpacity style={styles.saveButton} onPress={handleSalvar}>
            <Text style={styles.saveButtonText}>Salvar Alterações</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelButton} onPress={handleCancelar}>
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' },

  overlayContainer: { width: '90%', alignItems: 'center' },

  title: {fontWeight:'760',fontFamily:'Questrial-Regular',fontSize: 34, fontWeight: 'bold', color: '#255736', marginBottom: 20 },

  formContainer: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.85)',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },

  input: {
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    fontFamily:'Questrial-Regular'
  },

  saveButton: {
    backgroundColor: '#357447',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 15,
    width: '80%',
    alignItems: 'center',
  },

  saveButtonText: {fontFamily:'Questrial-Regular', color: 'white', fontWeight: 'bold' },

  cancelButton: {
    backgroundColor: '#ff6b6b',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
  },

  cancelButtonText: { fontFamily:'Questrial-Regular',color: 'white', fontWeight: 'bold' },
});
