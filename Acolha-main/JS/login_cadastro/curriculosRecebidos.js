import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Linking,
  TextInput,
  Alert
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import styles from "../estilo/estiloPerfis/estiloPerfilPJ.js";

export default function CurriculosRecebidos() {
  const route = useRoute();
  const navigation = useNavigation();

  const empresa = route?.params?.empresa || "Empresa";

  // Estado dos candidatos
  const [candidatos, setCandidatos] = useState([
    {
      id: 1,
      nome: "Carlos Ramirez",
      cargoDesejado: "Auxiliar Administrativo",
      resumo:
        "Imigrante venezuelano com experiência em atendimento e organização.",
      foto: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
      curriculo: "https://www.africau.edu/images/default/sample.pdf",
    },
    {
      id: 2,
      nome: "Ana Sofia Torres",
      cargoDesejado: "Atendente de Loja",
      resumo:
        "Experiência em vendas e atendimento ao público. Inglês e espanhol fluente.",
      foto: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
      curriculo: "https://www.africau.edu/images/default/sample.pdf",
    },
  ]);

  // Estado para sugestões
  const [sugestao, setSugestao] = useState("");

  // Função excluir
  function excluirCandidato(id) {
    setCandidatos((prev) => prev.filter((c) => c.id !== id));
  }

  // Enviar sugestão
  function handleEnviarSugestao() {
    if (sugestao.trim() === "") {
      Alert.alert("Atenção", "Digite uma sugestão antes de enviar.");
      return;
    }

    Alert.alert("Obrigado!", "Sua sugestão foi enviada.");
    setSugestao("");
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        
        <Text style={styles.titulo}>Currículos Recebidos - {empresa}</Text>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Candidatos</Text>

          {candidatos.map((candidato) => (
            <View
              key={candidato.id}
              style={{
                backgroundColor: "#fff",
                padding: 15,
                borderRadius: 12,
                marginBottom: 20,
                elevation: 3,
              }}
            >
              {/* FOTO */}
              <View style={{ alignItems: "center", marginBottom: 10 }}>
                <Image
                  source={{ uri: candidato.foto }}
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: 50,
                    marginBottom: 10,
                  }}
                />
              </View>

              {/* NOME */}
              <Text style={[styles.vagaTitulo, { textAlign: "center" }]}>
                {candidato.nome}
              </Text>

              {/* CARGO */}
              <Text
                style={[
                  styles.vagaDescricao,
                  { textAlign: "center", marginTop: 5 },
                ]}
              >
                Cargo desejado: {candidato.cargoDesejado}
              </Text>

              {/* RESUMO */}
              <Text
                style={[
                  styles.vagaDescricao,
                  { textAlign: "center", marginTop: 8 },
                ]}
              >
                {candidato.resumo}
              </Text>

              {/* BOTÃO VER CURRÍCULO */}
              <TouchableOpacity
                style={{
                  marginTop: 15,
                  backgroundColor: "#27ae60",
                  paddingVertical: 10,
                  borderRadius: 10,
                  alignItems: "center",
                  width: "80%",
                  alignSelf: "center",
                }}
                onPress={() => Linking.openURL(candidato.curriculo)}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  Abrir currículo →
                </Text>
              </TouchableOpacity>

              {/* BOTÃO EXCLUIR */}
              <TouchableOpacity
                style={{
                  marginTop: 10,
                  backgroundColor: "#c0392b",
                  paddingVertical: 10,
                  borderRadius: 10,
                  alignItems: "center",
                  width: "80%",
                  alignSelf: "center",
                }}
                onPress={() => excluirCandidato(candidato.id)}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  Excluir candidato ✖
                </Text>
              </TouchableOpacity>
            </View>
          ))}

          {candidatos.length === 0 && (
            <Text
              style={{
                textAlign: "center",
                color: "#555",
                fontSize: 16,
                marginTop: 10,
              }}
            >
              Nenhum currículo restante.
            </Text>
          )}
        </View>

        {/* BOTÃO VOLTAR */}
        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.textoVoltar}>← Voltar</Text>
        </TouchableOpacity>

               {/* FOOTER */}
               <View style={styles.footerWrapper}>
                 <View style={styles.footer}>
                   <Text style={styles.footerTitle}>Acolha</Text>
                   <Text style={styles.footerText}>
                     Acolhendo vidas. Construindo Futuros
                   </Text>
       
                   <View style={styles.subscribe}>
                     <Text style={styles.subscribeTitle}>Sugestões</Text>
                     <Text style={styles.subscribeText}>
                       Envie aqui suas sugestões, dúvidas ou críticas.{"\n"}Sua opinião é muito importante para nós!
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
       
                   <View style={styles.socialContainer}>
                     <TouchableOpacity
                       onPress={() => Linking.openURL("https://www.instagram.com/")}
                     >
                       <Image
                         source={require("../../IMG/instragam.png")}
                         style={styles.socialIcon}
                       />
                     </TouchableOpacity>
       
                     <TouchableOpacity
                       onPress={() => Linking.openURL("mailto:contato@acolha.com")}
                     >
                       <Image
                         source={require("../../IMG/email.png")}
                         style={styles.socialIcon}
                       />
                     </TouchableOpacity>
                   </View>
       
                   <Text style={styles.footerCopyright}>
                     © 2025 todos os direitos reservados.{"\n"}Acolha é uma marca registrada da Civitas Tech.
                   </Text>
                 </View>
               </View>
      </ScrollView>
    </SafeAreaView>
  );
}
