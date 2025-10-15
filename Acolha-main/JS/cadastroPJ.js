import React from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Image, Linking } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function CadastroPJ() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ alignItems: "center" }}>
      {/* Botão de Voltar */}
      <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate('home')}>
        <Text style={styles.textoVoltar}>← Voltar à Página Inicial</Text>
      </TouchableOpacity>
      
      <Text style={styles.titulo}>Tela de Cadastro - {"\n"} Pessoa Jurídica</Text>

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

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Acolha</Text>
        <Text style={styles.footerText}>Acolhendo vidas. Construindo Futuros</Text>

        {/* Sugestões */}
        <View style={styles.subscribe}>
          <Text style={styles.subscribeTitle}>Sugestões</Text>
          <Text style={styles.subscribeText}>
            Envie aqui suas sugestões, dúvidas ou críticas.{"\n"}
            Sua opinião é muito importante para nós!
          </Text>
          <View style={styles.inputGroup}>
            <TextInput
              placeholder="Sua Sugestão"
              placeholderTextColor="white"
              style={styles.inputSugestao}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
            <TouchableOpacity style={styles.inputButton}>
              <Text style={styles.inputButtonText}>➤</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Redes sociais */}
        <View style={styles.socialContainer}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/')}>
            <Image source={require('../IMG/instragam.jpg')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('mailto:contato@acolha.com')}>
            <Image source={require('../IMG/email.png')} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>

        <Text style={styles.footerCopyright}>
          © 2025 todos os direitos reservados.{"\n"}Acolha é uma marca registrada da Civitas Tech.
        </Text>
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
    marginBottom: 80,
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
    marginTop: 20,
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
  /* Footer */
  footer: { alignItems: 'center', paddingVertical: 25, backgroundColor: '#357447', width: '100%', height: '36%' },
  footerTitle: { fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 5 },
  footerText: { color: 'white', textAlign: 'center', marginVertical: 5, lineHeight: 20 },
  subscribe: { marginTop: 10, alignItems: 'center', width: '90%' },
  subscribeTitle: { fontSize: 16, fontWeight: 'bold', color: 'white' },
  subscribeText: { textAlign: 'center', marginVertical: 10, color: 'white', lineHeight: 20 },
  inputGroup: { flexDirection: 'row', width: '90%', alignItems: 'center' },
  inputSugestao: { backgroundColor: 'transparent', borderWidth: 1, borderColor: 'white', padding: 10, borderRadius: 5, flex: 1, marginRight: 5, height: 41, color: 'white' },
  inputButton: { backgroundColor: '#255736', paddingHorizontal: 15, justifyContent: 'center', borderRadius: 5, height: 41 },
  inputButtonText: { color: 'white', fontWeight: 'bold' },
  socialContainer: { flexDirection: 'row', marginTop: 10, justifyContent: 'center' },
  socialIcon: { width: 35, height: 35, marginHorizontal: 10 },
  footerCopyright: { color: 'white', fontSize: 12, textAlign: 'center', marginTop: 10 },
});
