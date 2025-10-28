import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

export default function EditarPerfilPJ() {
  const route = useRoute();
  const navigation = useNavigation();
  const { width } = useWindowDimensions();

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

  // Escala dinâmica
  const scale = width / 375;
  const normalize = (size) => Math.round(size * scale);

  // Breakpoints
  const isTablet = width >= 700 && width < 1024;
  const isWideScreen = width >= 1024;

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
      type: "success",
      text1: "✅ Sucesso",
      text2: "As informações foram atualizadas com sucesso!",
      position: "top",
      visibilityTime: 2000,
      fontFamily: "Questrial-Regular",
    });

    navigation.replace("perfilPJ", dadosAtualizados);
  }

  function cancelar() {
    Toast.show({
      type: "info",
      text1: "Cancelado",
      text2: "As alterações não foram salvas.",
      position: "top",
      visibilityTime: 2000,
      fontFamily: "Questrial-Regular",
    });

    navigation.goBack();
  }

  return (
    <ImageBackground
      source={require("../../IMG/FundoCadastro.jpeg")}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView
            contentContainerStyle={[
              styles.scrollContent,
              { alignItems: "center", paddingVertical: normalize(30) },
            ]}
            keyboardShouldPersistTaps="handled"
          >
            <View
              style={[
                styles.formContainer,
                {
                  width:
                    width < 400
                      ? "95%"
                      : width < 900
                      ? "90%"
                      : 900,
                },
              ]}
            >
              <Text
                style={[
                  styles.title,
                  {
                    fontSize: isTablet
                      ? normalize(26)
                      : isWideScreen
                      ? normalize(30)
                      : normalize(34),
                    marginBottom: normalize(20),
                  },
                ]}
              >
                Editar Dados da Empresa
              </Text>

              <View
                style={[
                  styles.formContent,
                  (isTablet || isWideScreen) && {
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  },
                ]}
              >
                {/* Coluna 1 */}
                <View style={[styles.inputColumn, (isTablet || isWideScreen) && { width: "48%" }]}>
                  <View style={styles.inputGroup}>
                    <Text style={[styles.label, { fontSize: normalize(14) }]}>Nome</Text>
                    <TextInput
                      style={[styles.input, { fontSize: normalize(14) }]}
                      value={nomeEdit}
                      onChangeText={setNomeEdit}
                    />
                  </View>

                  <View style={styles.inputGroup}>
                    <Text style={[styles.label, { fontSize: normalize(14) }]}>Senha</Text>
                    <TextInput
                      style={[styles.input, { fontSize: normalize(14) }]}
                      value={senhaEdit}
                      onChangeText={setSenhaEdit}
                      secureTextEntry
                    />
                  </View>

                  <View style={styles.inputGroup}>
                    <Text style={[styles.label, { fontSize: normalize(14) }]}>Telefone</Text>
                    <TextInput
                      style={[styles.input, { fontSize: normalize(14) }]}
                      value={telefoneEdit}
                      onChangeText={setTelefoneEdit}
                      keyboardType="phone-pad"
                    />
                  </View>

                  <View style={styles.inputGroup}>
                    <Text style={[styles.label, { fontSize: normalize(14) }]}>Cargo</Text>
                    <TextInput
                      style={[styles.input, { fontSize: normalize(14) }]}
                      value={cargoEdit}
                      onChangeText={setCargoEdit}
                    />
                  </View>
                </View>

                {/* Coluna 2 */}
                <View style={[styles.inputColumn, (isTablet || isWideScreen) && { width: "48%" }]}>
                  <View style={styles.inputGroup}>
                    <Text style={[styles.label, { fontSize: normalize(14) }]}>Email</Text>
                    <TextInput
                      style={[styles.input, { fontSize: normalize(14) }]}
                      value={emailEdit}
                      onChangeText={setEmailEdit}
                      keyboardType="email-address"
                      autoCapitalize="none"
                    />
                  </View>

                  <View style={styles.inputGroup}>
                    <Text style={[styles.label, { fontSize: normalize(14) }]}>CNPJ</Text>
                    <TextInput
                      style={[styles.input, { fontSize: normalize(14) }]}
                      value={cnpjEdit}
                      onChangeText={setCnpjEdit}
                      keyboardType="number-pad"
                    />
                  </View>

                  <View style={styles.inputGroup}>
                    <Text style={[styles.label, { fontSize: normalize(14) }]}>Nome do Representante</Text>
                    <TextInput
                      style={[styles.input, { fontSize: normalize(14) }]}
                      value={nomeRepresentanteEdit}
                      onChangeText={setNomeRepresentanteEdit}
                    />
                  </View>
                </View>

                {/* Campos largos */}
                <View style={[styles.inputGroup, { width: "100%" }]}>
                  <Text style={[styles.label, { fontSize: normalize(14) }]}>Área de Atuação</Text>
                  <TextInput
                    style={[styles.input, { height: normalize(90), fontSize: normalize(14) }]}
                    value={areaAtuacaoEdit}
                    onChangeText={setAreaAtuacaoEdit}
                    multiline
                  />
                </View>

                <View style={[styles.inputGroup, { width: "100%" }]}>
                  <Text style={[styles.label, { fontSize: normalize(14) }]}>Mensagem</Text>
                  <TextInput
                    style={[styles.input, { height: normalize(90), fontSize: normalize(14) }]}
                    value={mensagemEdit}
                    onChangeText={setMensagemEdit}
                    multiline
                  />
                </View>
              </View>

              <TouchableOpacity
                style={[styles.saveButton, { paddingVertical: normalize(14) }]}
                onPress={salvar}
              >
                <Text style={[styles.saveButtonText, { fontSize: normalize(16) }]}>
                  Salvar
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.cancelButton, { paddingVertical: normalize(12) }]}
                onPress={cancelar}
              >
                <Text style={[styles.cancelButtonText, { fontSize: normalize(14) }]}>
                  Cancelar
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  safeArea: { flex: 1 },
  scrollContent: { justifyContent: "center" },

  formContainer: {
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
    alignSelf: "center",
  },

  formContent: { width: "100%" },

  inputColumn: {
    flexDirection: "column",
  },

  inputGroup: {
    marginBottom: 15,
    width: "100%",
  },

  title: {
    fontWeight: "bold",
    color: "#255736",
    textAlign: "center",
    fontFamily: "Questrial-Regular",
  },

  label: {
    fontFamily: "Questrial-Regular",
    fontWeight: "bold",
    marginBottom: 5,
    color: "#357447",
  },

  input: {
    backgroundColor: "white",
    borderColor: "#357447",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontFamily: "Questrial-Regular",
  },

  saveButton: {
    marginTop: 20,
    backgroundColor: "#357447",
    borderRadius: 8,
    alignItems: "center",
  },

  saveButtonText: {
    color: "white",
    fontWeight: "bold",
  },

  cancelButton: {
    marginTop: 10,
    backgroundColor: "#aaa",
    borderRadius: 8,
    alignItems: "center",
  },

  cancelButtonText: {
    fontFamily: "Questrial-Regular",
    color: "#333",
    fontWeight: "bold",
  },
});
