import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import styles from "../estilo/estiloLoginCadastro/estiloCadastrarVaga.js";

export default function CadastrarVaga() {
  const navigation = useNavigation();
  const route = useRoute();

  const empresa = route?.params?.empresa || "Empresa";

  // Estados dos campos do formulário
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [requisitos, setRequisitos] = useState("");
  const [salario, setSalario] = useState("");
  const [local, setLocal] = useState("");
  const [sugestao, setSugestao] = useState("");

  // Função para salvar a vaga
  const salvarVaga = () => {
    if (!titulo || !descricao || !requisitos || !local) {
      Toast.show({
        type: "error",
        text1: "Campos obrigatórios",
        text2: "Preencha todos os campos!",
        position: "top",
        visibilityTime: 3000,
      });
      return;
    }

    const novaVaga = {
      titulo,
      descricao,
      requisitos,
      salario,
      local,
      link: "#", // opcional
    };

    Toast.show({
      type: "success",
      text1: "Sucesso!",
      text2: "Vaga cadastrada com sucesso!",
      position: "top",
      visibilityTime: 3000,
    });

    // Navega para o perfil PJ com a nova vaga
    navigation.navigate("perfilPJ", { novaVaga, empresa });
  };

  // Função para enviar sugestão
  const enviarSugestao = () => {
    if (!sugestao.trim()) {
      Toast.show({
        type: "error",
        text1: "Atenção",
        text2: "Digite uma sugestão antes de enviar.",
        position: "top",
        visibilityTime: 3000,
      });
      return;
    }
    Toast.show({
      type: "success",
      text1: "Obrigado!",
      text2: "Sua sugestão foi enviada.",
      position: "top",
      visibilityTime: 3000,
    });
    setSugestao("");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>Cadastrar Nova Vaga - {empresa}</Text>

        <Text style={styles.label}>Título da vaga *</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Atendente, Auxiliar Administrativo"
          value={titulo}
          onChangeText={setTitulo}
        />

        <Text style={styles.label}>Descrição *</Text>
        <TextInput
          style={[styles.input, styles.textarea]}
          placeholder="Descreva a vaga..."
          multiline
          value={descricao}
          onChangeText={setDescricao}
        />

        <Text style={styles.label}>Requisitos *</Text>
        <TextInput
          style={[styles.input, styles.textarea]}
          placeholder="Ex: Experiência em atendimento, inglês básico..."
          multiline
          value={requisitos}
          onChangeText={setRequisitos}
        />

        <Text style={styles.label}>Salário (opcional)</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: R$ 2.000"
          value={salario}
          onChangeText={setSalario}
        />

        <Text style={styles.label}>Local da vaga *</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: São Paulo - SP"
          value={local}
          onChangeText={setLocal}
        />

        <TouchableOpacity style={styles.botaoSalvar} onPress={salvarVaga}>
          <Text style={styles.textoBotao}>Salvar Vaga</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.textoVoltar}>← Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
