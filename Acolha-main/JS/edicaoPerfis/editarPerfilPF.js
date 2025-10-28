import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,SafeAreaView,ScrollView,KeyboardAvoidingView,Platform,ImageBackground,useWindowDimensions,} from "react-native";
import styles from "../estilo/estiloEdicaoPerfis/estiloEditarPerfilPF.js";
import { useRoute, useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

export default function EditarPerfilPF() {
  const route = useRoute();
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();

  const {
    nome = "",
    email = "",
    telefone = "",
    cpf = "",
    nacionalidade = "",
    dataNascimento = "",
  } = route.params || {};

  const [nomeEdit, setNomeEdit] = useState(nome);
  const [emailEdit, setEmailEdit] = useState(email);
  const [telefoneEdit, setTelefoneEdit] = useState(telefone);
  const [cpfEdit, setCpfEdit] = useState(cpf);
  const [nacionalidadeEdit, setNacionalidadeEdit] = useState(nacionalidade);
  const [dataNascimentoEdit, setDataNascimentoEdit] = useState(dataNascimento);

  function salvar() {
    const dadosAtualizados = {
      nome: nomeEdit,
      email: emailEdit,
      telefone: telefoneEdit,
      cpf: cpfEdit,
      nacionalidade: nacionalidadeEdit,
      dataNascimento: dataNascimentoEdit,
    };

    Toast.show({
      type: "success",
      text1: "✅ Sucesso",
      text2: "As informações foram atualizadas com sucesso!",
      position: "top",
      visibilityTime: 2000,
      fontFamily: "Questrial-Regular",
    });

    navigation.replace("perfilPF", dadosAtualizados);
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

  // Responsividade
  const isTablet = width >= 700;
  const containerWidth = width < 400 ? "95%" : width < 900 ? "90%" : 900;

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
              isTablet && {
                flexGrow: 1,
                justifyContent: "center", // centraliza verticalmente em tablets
              },
            ]}
            keyboardShouldPersistTaps="handled"
          >
            <View
              style={[
                styles.formContainer,
                {
                  width: containerWidth,
                  alignSelf: "center",
                },
              ]}
            >
              <Text
                style={[
                  styles.title,
                  isTablet && { fontSize: 28, marginBottom: 15 },
                ]}
              >
                Editar Dados Pessoais
              </Text>

              <View
                style={[
                  styles.formContent,
                  isTablet && {
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  },
                ]}
              >
                <View style={[styles.inputGroup, isTablet && styles.halfWidth]}>
                  <Text style={styles.label}>Nome</Text>
                  <TextInput
                    style={[styles.input, isTablet && styles.inputTablet]}
                    value={nomeEdit}
                    onChangeText={setNomeEdit}
                  />
                </View>

                <View style={[styles.inputGroup, isTablet && styles.halfWidth]}>
                  <Text style={styles.label}>Email</Text>
                  <TextInput
                    style={[styles.input, isTablet && styles.inputTablet]}
                    value={emailEdit}
                    onChangeText={setEmailEdit}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>

                <View style={[styles.inputGroup, isTablet && styles.halfWidth]}>
                  <Text style={styles.label}>Telefone</Text>
                  <TextInput
                    style={[styles.input, isTablet && styles.inputTablet]}
                    value={telefoneEdit}
                    onChangeText={setTelefoneEdit}
                    keyboardType="phone-pad"
                  />
                </View>

                <View style={[styles.inputGroup, isTablet && styles.halfWidth]}>
                  <Text style={styles.label}>CPF</Text>
                  <TextInput
                    style={[styles.input, isTablet && styles.inputTablet]}
                    value={cpfEdit}
                    onChangeText={setCpfEdit}
                    keyboardType="number-pad"
                  />
                </View>

                <View style={[styles.inputGroup, isTablet && styles.halfWidth]}>
                  <Text style={styles.label}>Nacionalidade</Text>
                  <TextInput
                    style={[styles.input, isTablet && styles.inputTablet]}
                    value={nacionalidadeEdit}
                    onChangeText={setNacionalidadeEdit}
                  />
                </View>

                <View style={[styles.inputGroup, isTablet && styles.halfWidth]}>
                  <Text style={styles.label}>Data de Nascimento</Text>
                  <TextInput
                    style={[styles.input, isTablet && styles.inputTablet]}
                    value={dataNascimentoEdit}
                    onChangeText={setDataNascimentoEdit}
                    placeholder="DD/MM/AAAA"
                  />
                </View>
              </View>

              <TouchableOpacity style={styles.saveButton} onPress={salvar}>
                <Text
                  style={[
                    styles.saveButtonText,
                    isTablet && { fontSize: 16 },
                  ]}
                >
                  Salvar
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cancelButton} onPress={cancelar}>
                <Text
                  style={[
                    styles.cancelButtonText,
                    isTablet && { fontSize: 15 },
                  ]}
                >
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

 