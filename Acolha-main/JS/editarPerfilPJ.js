import React, { useState } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, 
  KeyboardAvoidingView, Platform, ImageBackground, Dimensions 
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import Toast from 'react-native-toast-message';

export default function EditarPerfilPJ() {
  const route = useRoute();
  const navigation = useNavigation();

  const {
    nome = "",
    email = "",
    senha = "",
    cnpj = "",
    telefone = "",
    nomeRepresentante = "",
    cargo = "",
    areaAtuacao = "",
    mensagem = "",
  } = route.params || {};

  const [nomeEdit, setNomeEdit] = useState(nome);
  const [emailEdit, setEmailEdit] = useState(email);
  const [senhaEdit, setSenhaEdit] = useState(senha);
  const [cnpjEdit, setCnpjEdit] = useState(cnpj);
  const [telefoneEdit, setTelefoneEdit] = useState(telefone);
  const [nomeRepresentanteEdit, setNomeRepresentanteEdit] = useState(nomeRepresentante);
  const [cargoEdit, setCargoEdit] = useState(cargo);
  const [areaAtuacaoEdit, setAreaAtuacaoEdit] = useState(areaAtuacao);
  const [mensagemEdit, setMensagemEdit] = useState(mensagem);

  function salvar() {
    const dadosAtualizados = {
      nome: nomeEdit,
      email: emailEdit,
      senha: senhaEdit,
      cnpj: cnpjEdit,
      telefone: telefoneEdit,
      nomeRepresentante: nomeRepresentanteEdit,
      cargo: cargoEdit,
      areaAtuacao: areaAtuacaoEdit,
      mensagem: mensagemEdit,
    };

    Toast.show({
      type: 'success',
      text1: '✅ Sucesso',
      text2: 'As informações foram atualizadas com sucesso!',
      position: 'top',
      visibilityTime: 2000,
    });

    navigation.replace("perfilPJ", dadosAtualizados);
  }

  function cancelar() {
    Toast.show({
      type: 'info',
      text1: 'Cancelado',
      text2: 'As alterações não foram salvas.',
      position: 'top',
      visibilityTime: 2000,
    });

    navigation.goBack();
  }

  return (
    <ImageBackground
      source={require('../IMG/FundoCadastro.jpeg')}
      style={styles.background}
    >
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        >
          <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
            <Text style={styles.title}>Editar Dados da Empresa</Text>

            <View style={styles.formContainer}>
              <Text style={styles.label}>Nome</Text>
              <TextInput style={styles.input} value={nomeEdit} onChangeText={setNomeEdit} />

              <Text style={styles.label}>Email</Text>
              <TextInput style={styles.input} value={emailEdit} onChangeText={setEmailEdit} keyboardType="email-address" autoCapitalize="none" />

              <Text style={styles.label}>Senha</Text>
              <TextInput style={styles.input} value={senhaEdit} onChangeText={setSenhaEdit} secureTextEntry />

              <Text style={styles.label}>CNPJ</Text>
              <TextInput style={styles.input} value={cnpjEdit} onChangeText={setCnpjEdit} keyboardType="number-pad" />

              <Text style={styles.label}>Telefone</Text>
              <TextInput style={styles.input} value={telefoneEdit} onChangeText={setTelefoneEdit} keyboardType="phone-pad" />

              <Text style={styles.label}>Nome do Representante</Text>
              <TextInput style={styles.input} value={nomeRepresentanteEdit} onChangeText={setNomeRepresentanteEdit} />

              <Text style={styles.label}>Cargo</Text>
              <TextInput style={styles.input} value={cargoEdit} onChangeText={setCargoEdit} />

              <Text style={styles.label}>Área de Atuação</Text>
              <TextInput
                style={[styles.input, { height: 90 }]}
                value={areaAtuacaoEdit}
                onChangeText={setAreaAtuacaoEdit}
                multiline
              />

              <Text style={styles.label}>Mensagem</Text>
              <TextInput
                style={[styles.input, { height: 90 }]}
                value={mensagemEdit}
                onChangeText={setMensagemEdit}
                multiline
              />

              <TouchableOpacity style={styles.saveButton} onPress={salvar}>
                <Text style={styles.saveButtonText}>Salvar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cancelButton} onPress={cancelar}>
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  background: { flex: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' },

  safeArea: { flex: 1 },

  scrollContent: { padding: 20, alignItems: 'center' },

  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#255736",
    marginBottom: 20,
    textAlign: "center",
  },

  formContainer: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },

  label: { fontWeight: "bold", marginTop: 15, marginBottom: 5, color: "#357447", fontSize: 16 },

  input: {
    backgroundColor: "white",
    borderColor: "#357447",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginTop: 4,
  },

  saveButton: {
    marginTop: 20,
    backgroundColor: "#357447",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },

  saveButtonText: { color: "white", fontWeight: "bold", fontSize: 18 },

  cancelButton: {
    marginTop: 10,
    backgroundColor: "#aaa",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },

  cancelButtonText: { color: "#333", fontWeight: "bold", fontSize: 16 },
});
