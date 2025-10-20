import React from "react";
import { View, Text, ScrollView,TextInput, TouchableOpacity, StyleSheet, Image, Linking, SafeAreaView, KeyboardAvoidingView, Platform } from "react-native";

import { useRoute, useNavigation } from "@react-navigation/native";

export default function PerfilPJ() {
  const route = useRoute();
  const navigation = useNavigation();

  // Recebe dados atualizados via params, senão usa dados padrão
  const {
    nome = "Empresa Exemplo",
    email = "contato@empresa.com",
    senha = "123456",
    cnpj = "00.000.000/0001-00",
    telefone = "(11) 99999-9999",
    nomeRepresentante = "João Silva",
    cargo = "CEO",
    areaAtuacao = "Tecnologia",
    mensagem = "Nossa missão é inovar.",
  } = route.params || {};

  const projetosApoiados = [
    { id: 1, nome: "Projeto Educação", descricao: "Apoio a escolas comunitárias." },
    { id: 2, nome: "Projeto Meio Ambiente", descricao: "Campanhas de reciclagem e preservação." },
    { id: 3, nome: "Projeto Saúde", descricao: "Clínicas gratuitas para comunidades carentes." },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>Perfil - Pessoa Jurídica</Text>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Informações da Empresa</Text>

          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.valor}>{nome}</Text>

          <Text style={styles.label}>Email:</Text>
          <Text style={styles.valor}>{email}</Text>

          <Text style={styles.label}>Senha:</Text>
          <Text style={styles.valor}>{"*".repeat(senha.length)}</Text>

          <Text style={styles.label}>CNPJ:</Text>
          <Text style={styles.valor}>{cnpj}</Text>

          <Text style={styles.label}>Telefone:</Text>
          <Text style={styles.valor}>{telefone}</Text>

          <Text style={styles.sectionTitle}>Representante</Text>

          <Text style={styles.label}>Nome do Representante:</Text>
          <Text style={styles.valor}>{nomeRepresentante}</Text>

          <Text style={styles.label}>Cargo:</Text>
          <Text style={styles.valor}>{cargo}</Text>

          <Text style={styles.label}>Área de Atuação:</Text>
          <Text style={styles.valor}>{areaAtuacao}</Text>

          <Text style={styles.label}>Mensagem:</Text>
          <Text style={styles.valor}>{mensagem}</Text>

          <TouchableOpacity 
            style={styles.botaoEditar} 
            onPress={() => navigation.navigate("editarPerfilPJ", {
              nome,
              email,
              senha,
              cnpj,
              telefone,
              nomeRepresentante,
              cargo,
              areaAtuacao,
              mensagem,
            })}
          >
            <Text style={styles.botaoTexto}>Editar Dados</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Projetos que a empresa apoia</Text>
          {projetosApoiados.map(projeto => (
            <View key={projeto.id} style={styles.projetoCard}>
              <Text style={styles.projetoNome}>{projeto.nome}</Text>
              <Text style={styles.projetoDescricao}>{projeto.descricao}</Text>
            </View>
          ))}
        </View>

         <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate('home')}>
             <Text style={styles.textoVoltar}>← Voltar à Página Inicial</Text>
              </TouchableOpacity>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#357447",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#357447",
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    marginTop: 10,
    color: "#357447",
  },
  valor: {
    fontSize: 16,
    color: "#333",
    marginTop: 2,
  },
   botaoVoltar: { alignItems:'center',alignSelf: 'flex-start', marginLeft: 20, marginBottom: 30, backgroundColor: '#357447', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 6, marginTop: 15 },
  textoVoltar: { color: '#fff', fontWeight: 'bold' },
  botaoEditar: {
    backgroundColor: "#357447",
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginTop: 20,
    alignSelf: "center",
  },
  botaoTexto: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  projetoCard: {
    backgroundColor: "#e5f3e9",
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
  },
  projetoNome: {
    fontWeight: "bold",
    color: "#2f6d2f",
    fontSize: 16,
  },
  projetoDescricao: {
    color: "#4a4a4a",
    marginTop: 4,
  },
   footer: { 
    width: '100%', 
    backgroundColor: '#357447', 
    alignItems: 'center', 
    paddingVertical: 25, 
    marginTop: 70,
  },
  footerTitle: { fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 5 },
  footerText: { color: 'white', textAlign: 'center', marginVertical: 5, lineHeight: 20 },
  subscribe: { marginTop: 10, alignItems: 'center', width: '90%' },
  subscribeTitle: { fontSize: 16, fontWeight: 'bold', color: 'white' },
  subscribeText: { textAlign: 'center', marginVertical: 10, color: 'white', lineHeight: 20 },
  inputGroup: { flexDirection: 'row', width: '70%', alignItems: 'center' },
  inputSugestao: { backgroundColor: 'transparent', borderWidth: 1, borderColor: 'white', padding: 10, borderRadius: 5, flex: 1, marginRight: 5, marginTop:15, marginBottom:15, height: 41, color: 'white' },
  inputButton: { backgroundColor: '#255736', paddingHorizontal: 15, justifyContent: 'center', borderRadius: 5, height: 41 },
  inputButtonText: { color: 'white', fontWeight: 'bold' },
  socialContainer: { flexDirection: 'row', marginTop: 10, justifyContent: 'center' },
  socialIcon: { width: 35, height: 35, marginHorizontal: 10 },
  footerCopyright: { 
    color: 'white', 
    fontSize: 12, 
    textAlign: 'center', 
    marginTop: 10,
    fontWeight: 'bold'
  },
});
