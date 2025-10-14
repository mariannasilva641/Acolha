import React from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

export default function CadastroPJ() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ alignItems: "center" }}>
      {/* Botão de Voltar */}
    <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate('home')}>
        <Text style={styles.textoVoltar}>← Voltar à Página Inicial</Text>
    </TouchableOpacity>
      
      <Text style={styles.titulo}>Tela de Cadastro - Pessoa Jurídica</Text>

      <View style={styles.card}>
        {/* Nome */}
        <TextInput style={styles.input} placeholder="Nome" />

        {/* Email + Domínio */}
        <View style={styles.row}>
          <TextInput style={[styles.input, { flex: 2 }]} placeholder="Email" />
          <TextInput style={[styles.input, { flex: 1 }]} placeholder="@gmail.com" />
        </View>

        {/* Senha */}
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />

        {/* CNPJ */}
        <TextInput style={styles.input} placeholder="CNPJ" />

        {/* Telefone */}
        <TextInput style={styles.input} placeholder="Telefone" keyboardType="phone-pad" />

        {/* Nome do Representante e Cargo */}
        <View style={styles.row}>
          <TextInput style={[styles.input, { flex: 2 }]} placeholder="Nome do Representante" />
          <TextInput style={[styles.input, { flex: 1 }]} placeholder="Cargo" />
        </View>

        {/* Área de Atuação */}
        <TextInput
          style={[styles.input, { height: 80 }]}
          placeholder="Área de Atuação"
          multiline
        />

        {/* Mensagem */}
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Mensagem"
          multiline
        />

        {/* Botão */}
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#357447",
    marginVertical: 20,
    textAlign: "center",
  },
  card: {
    width: "90%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  botao: {
    backgroundColor: "#357447",
    padding: 15,
    borderRadius: 8,
    marginTop: 15,
    alignItems: "center",
  },
   botaoVoltar: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 10,
    marginTop:20,
    backgroundColor: '#357447',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  textoVoltar: {
    color: '#fff',
    fontWeight: 'bold',
  },
  botaoTexto: {
    color: "white",
    fontWeight: "bold",
  },
});
