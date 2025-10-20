import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function editarPerfilPJ() {
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
    // Substitui a tela atual pela de perfil já atualizada
    navigation.replace("perfilPJ", dadosAtualizados);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          <Text style={styles.title}>Editar Dados da Empresa</Text>

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
            style={[styles.input, { height: 80 }]}
            value={areaAtuacaoEdit}
            onChangeText={setAreaAtuacaoEdit}
            multiline
          />

          <Text style={styles.label}>Mensagem</Text>
          <TextInput
            style={[styles.input, { height: 80 }]}
            value={mensagemEdit}
            onChangeText={setMensagemEdit}
            multiline
          />

          <TouchableOpacity style={styles.button} onPress={salvar}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { backgroundColor: "#aaa", marginTop: 10 }]} onPress={() => navigation.goBack()}>
            <Text style={[styles.buttonText, { color: "#333" }]}>Cancelar</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#E5E5E5" },
  container: { padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#357447",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontWeight: "bold",
    marginTop: 10,
    color: "#357447",
  },
  input: {
    backgroundColor: "white",
    borderColor: "#357447",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    marginTop: 4,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#357447",
    paddingVertical: 14,
    borderRadius: 6,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
