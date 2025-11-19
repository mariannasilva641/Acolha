import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
  Linking,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  Alert,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "../estilo/estiloPerfis/estiloPerfilAdm.js";

// Dados simulados
const usuariosPFIniciais = [
  { id: 1, nome: "Maria Souza", email: "maria@gmail.com", tipo: "Pessoa Física" },
  { id: 2, nome: "João Santos", email: "joao@gmail.com", tipo: "Pessoa Física" },
];

const usuariosPJIniciais = [
  { id: 1, nome: "Tech4Good", email: "contato@tech4good.com", tipo: "Pessoa Jurídica" },
  { id: 2, nome: "Instituto Verde", email: "info@verde.org", tipo: "Pessoa Jurídica" },
];

const projetosIniciais = [
  {
    id: 1,
    titulo: "CAMI - Centro de Apoio Pastoral do Migrante",
    descricao:
      "Organização sem fins lucrativos que promove inclusão social, econômica, política e cultural de imigrantes e refugiados...",
  },
  {
    id: 2,
    titulo: "Instituto Adus",
    descricao:
      "Atuamos em parceria com solicitantes de refúgio, refugiados e outras pessoas em situação de deslocamento forçado.",
  },
  {
    id: 3,
    titulo: "Missão Paz",
    descricao:
      "Instituição filantrópica que apoia e acolhe imigrantes e refugiados em São Paulo desde os anos 1930...",
  },
  {
    id: 4,
    titulo: "Cidades Invisíveis",
    descricao:
      "Atua desde 2012 promovendo inclusão social, acesso ao conhecimento, tecnologia, saúde...",
  },
];

const solicitacoesIniciais = [
  { id: 1, tipo: "Refúgio", motivo: "Fuga de conflitos", usuario: "João Silva" },
  { id: 2, tipo: "Ajuda Humanitária", motivo: "Perda de residência", usuario: "Maria Souza" },
  { id: 3, tipo: "Vagas de Emprego", motivo: "Precisa de trabalho", usuario: "Carlos Alberto" },
];

export default function PerfilADM() {
  const navigation = useNavigation();
  const route = useRoute();
  const { nome = "Administrador", email = "admin@acolha.com" } = route.params || {};

  const [mostrarPF, setMostrarPF] = useState(false);
  const [mostrarPJ, setMostrarPJ] = useState(false);
  const [mostrarProjetos, setMostrarProjetos] = useState(false);

  const [usuariosPF, setUsuariosPF] = useState(usuariosPFIniciais);
  const [usuariosPJ, setUsuariosPJ] = useState(usuariosPJIniciais);
  const [projetos, setProjetos] = useState(projetosIniciais);
  const [solicitacoes, setSolicitacoes] = useState(solicitacoesIniciais);

  // Funções de ação
  const responderSolicitacao = (id) => {
    Alert.alert("Responder", `Resposta enviada para a solicitação ID ${id}.`);
    setSolicitacoes((prev) => prev.filter((s) => s.id !== id));
  };

  const excluirSolicitacao = (id) => {
    Alert.alert("Excluir", `Solicitação ID ${id} excluída.`);
    setSolicitacoes((prev) => prev.filter((s) => s.id !== id));
  };

  const excluirEmpresa = (id) => {
    Alert.alert("Excluir", `Empresa ID ${id} excluída.`);
    setUsuariosPJ((prev) => prev.filter((u) => u.id !== id));
  };

  const excluirProjeto = (id) => {
    Alert.alert("Excluir", `Projeto ID ${id} excluído.`);
    setProjetos((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <ImageBackground
          source={require("../../IMG/FundoAcolha.png")}
          style={styles.background}
          resizeMode="cover"
        >
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            <View style={styles.contentContainer}>
              <Text style={styles.title}>Painel do Administrador</Text>

              {/* INFORMAÇÕES DO ADMIN */}
              <View style={styles.card}>
                <Text style={styles.sectionTitle}>Informações do Administrador</Text>
                <Text style={styles.infoItem}>👤 Nome: {nome}</Text>
                <Text style={styles.infoItem}>📧 Email: {email}</Text>
              </View>

              {/* SOLICITAÇÕES NÃO RESPONDIDAS */}
              <View style={styles.card}>
                <Text style={styles.sectionTitle}>Solicitações / Pedidos de Ajuda</Text>
                {solicitacoes.length === 0 ? (
                  <Text>Nenhuma solicitação pendente.</Text>
                ) : (
                  <FlatList
                    horizontal
                    data={solicitacoes}
                    keyExtractor={(item) => item.id.toString()}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                      <View style={[styles.subCard, { width: 250, marginRight: 10 }]}>
                        <Text style={styles.projectTitle}>{item.usuario}</Text>
                        <Text>Tipo: {item.tipo}</Text>
                        <Text>Motivo: {item.motivo}</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                          <TouchableOpacity
                            style={[styles.smallButton, { backgroundColor: "#4caf50" }]}
                            onPress={() => responderSolicitacao(item.id)}
                          >
                            <Text style={styles.smallButtonText}>Responder</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={[styles.smallButton, { backgroundColor: "#f44336" }]}
                            onPress={() => excluirSolicitacao(item.id)}
                          >
                            <Text style={styles.smallButtonText}>Excluir</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    )}
                  />
                )}
              </View>

              {/* USUÁRIOS PF */}
              <View style={styles.card}>
                <Text style={styles.sectionTitle}>Usuários - Pessoas Físicas</Text>
                <TouchableOpacity style={styles.button} onPress={() => setMostrarPF(!mostrarPF)}>
                  <Text style={styles.buttonText}>{mostrarPF ? "Esconder Usuários" : "Ver Usuários"}</Text>
                </TouchableOpacity>
                {mostrarPF &&
                  usuariosPF.map((u) => (
                    <View key={u.id} style={styles.subCard}>
                      <Text style={styles.projectTitle}>{u.nome}</Text>
                      <Text>Email: {u.email}</Text>
                      <Text>Tipo: {u.tipo}</Text>
                      <TouchableOpacity style={styles.smallButton} onPress={() => alert("Visualizar perfil de " + u.nome)}>
                        <Text style={styles.smallButtonText}>Visualizar</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
              </View>

              {/* USUÁRIOS PJ */}
              <View style={styles.card}>
                <Text style={styles.sectionTitle}>Usuários - Pessoas Jurídicas</Text>
                <TouchableOpacity style={styles.button} onPress={() => setMostrarPJ(!mostrarPJ)}>
                  <Text style={styles.buttonText}>{mostrarPJ ? "Esconder Empresas" : "Ver Empresas"}</Text>
                </TouchableOpacity>
                {mostrarPJ &&
                  usuariosPJ.map((u) => (
                    <View key={u.id} style={styles.subCard}>
                      <Text style={styles.projectTitle}>{u.nome}</Text>
                      <Text>Email: {u.email}</Text>
                      <Text>Tipo: {u.tipo}</Text>
                      <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <TouchableOpacity style={styles.smallButton} onPress={() => alert("Visualizar perfil de " + u.nome)}>
                          <Text style={styles.smallButtonText}>Visualizar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.smallButton, { backgroundColor: "#f44336", marginLeft: 10 }]} onPress={() => excluirEmpresa(u.id)}>
                          <Text style={styles.smallButtonText}>Excluir</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))}
              </View>

              {/* PROJETOS */}
              <View style={styles.card}>
                <Text style={styles.sectionTitle}>Projetos Ativos</Text>
                <TouchableOpacity style={styles.button} onPress={() => setMostrarProjetos(!mostrarProjetos)}>
                  <Text style={styles.buttonText}>{mostrarProjetos ? "Esconder Projetos" : "Ver Projetos"}</Text>
                </TouchableOpacity>
                {mostrarProjetos &&
                  projetos.map((p) => (
                    <View key={p.id} style={styles.subCard}>
                      <Text style={styles.projectTitle}>{p.titulo}</Text>
                      <Text>{p.descricao}</Text>
                      <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <TouchableOpacity style={styles.smallButton} onPress={() => alert("Editar projeto: " + p.titulo)}>
                          <Text style={styles.smallButtonText}>Editar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.smallButton, { backgroundColor: "#f44336", marginLeft: 10 }]} onPress={() => excluirProjeto(p.id)}>
                          <Text style={styles.smallButtonText}>Excluir</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))}
              </View>

              {/* BOTÃO VOLTAR */}
              <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("home")}>
                <Text style={styles.backButtonText}>← Voltar à Página Inicial</Text>
              </TouchableOpacity>
            </View>

            {/* FOOTER */}
            <View style={styles.footerWrapper}>
              <View style={styles.footer}>
                <Text style={styles.footerTitle}>Acolha</Text>
                <Text style={styles.footerText}>Acolhendo vidas. Construindo futuros.</Text>
                <View style={styles.socialContainer}>
                  <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/")}>
                    <Image source={require("../../IMG/instragam.png")} style={styles.socialIcon} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => Linking.openURL("mailto:contato@acolha.com")}>
                    <Image source={require("../../IMG/email.png")} style={styles.socialIcon} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.footerCopyright}>
                  © 2025 todos os direitos reservados.{"\n"}Acolha é uma marca registrada da Civitas Tech.
                </Text>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
