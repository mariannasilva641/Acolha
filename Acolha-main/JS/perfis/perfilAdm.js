import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
  Linking,
  Dimensions,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const isTablet = SCREEN_WIDTH >= 768;

const usuariosPF = [
  { nome: "Maria Souza", email: "maria@gmail.com", tipo: "Pessoa Física" },
  { nome: "João Santos", email: "joao@gmail.com", tipo: "Pessoa Física" },
];

const usuariosPJ = [
  { nome: "Tech4Good", email: "contato@tech4good.com", tipo: "Pessoa Jurídica" },
  { nome: "Instituto Verde", email: "info@verde.org", tipo: "Pessoa Jurídica" },
];

const projetos = [
  {
    titulo: "CAMI - Centro de Apoio Pastoral do Migrante",
    descricao:
      "Organização sem fins lucrativos que promove inclusão social, econômica, política e cultural de imigrantes e refugiados...",
  },
  {
    titulo: "Instituto Adus",
    descricao:
      "Atuamos em parceria com solicitantes de refúgio, refugiados e outras pessoas em situação de deslocamento forçado.",
  },
  {
    titulo: 'Missão Paz',
    descricao:
    'Instituição filantrópica que apoia e acolhe imigrantes e refugiados em São Paulo desde os anos 1930...'
  },
  {
    titulo:'Cidades Invisíveis',
    descricao:
     'Atua desde 2012 promovendo inclusão social, acesso ao conhecimento, tecnologia, saúde...'
  }
];

export default function PerfilADM() {
  const navigation = useNavigation();
  const route = useRoute();
  const { nome = "Administrador", email = "admin@acolha.com" } = route.params || {};

  const [mostrarPF, setMostrarPF] = useState(false);
  const [mostrarPJ, setMostrarPJ] = useState(false);
  const [mostrarProjetos, setMostrarProjetos] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ImageBackground
          source={require("../../IMG/FundoAcolha.png")}
          style={styles.background}
          resizeMode="cover"
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.contentContainer}>
              <Text style={styles.title}>Painel do Administrador</Text>

              {/* INFORMAÇÕES DO ADMIN */}
              <View style={styles.card}>
                <Text style={styles.sectionTitle}>Informações do Administrador</Text>
                <Text style={styles.infoItem}>👤 Nome: {nome}</Text>
                <Text style={styles.infoItem}>📧 Email: {email}</Text>

              </View>

              {/* GESTÃO DE USUÁRIOS PF */}
              <View style={styles.card}>
                <Text style={styles.sectionTitle}>Usuários - Pessoas Físicas</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setMostrarPF(!mostrarPF)}
                >
                  <Text style={styles.buttonText}>
                    {mostrarPF ? "Esconder Usuários" : "Ver Usuários"}
                  </Text>
                </TouchableOpacity>

                {mostrarPF &&
                  usuariosPF.map((u, i) => (
                    <View key={i} style={styles.subCard}>
                      <Text style={styles.projectTitle}>{u.nome}</Text>
                      <Text>Email: {u.email}</Text>
                      <Text>Tipo: {u.tipo}</Text>
                      <TouchableOpacity
                        style={styles.smallButton}
                        onPress={() => alert("Visualizar perfil de " + u.nome)}
                      >
                        <Text style={styles.smallButtonText}>Visualizar</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
              </View>

              {/* GESTÃO DE USUÁRIOS PJ */}
              <View style={styles.card}>
                <Text style={styles.sectionTitle}>Usuários - Pessoas Jurídicas</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setMostrarPJ(!mostrarPJ)}
                >
                  <Text style={styles.buttonText}>
                    {mostrarPJ ? "Esconder Empresas" : "Ver Empresas"}
                  </Text>
                </TouchableOpacity>

                {mostrarPJ &&
                  usuariosPJ.map((u, i) => (
                    <View key={i} style={styles.subCard}>
                      <Text style={styles.projectTitle}>{u.nome}</Text>
                      <Text>Email: {u.email}</Text>
                      <Text>Tipo: {u.tipo}</Text>
                      <TouchableOpacity
                        style={styles.smallButton}
                        onPress={() => alert("Visualizar perfil de " + u.nome)}
                      >
                        <Text style={styles.smallButtonText}>Visualizar</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
              </View>

              {/* GESTÃO DE PROJETOS */}
              <View style={styles.card}>
                <Text style={styles.sectionTitle}>Projetos Ativos</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setMostrarProjetos(!mostrarProjetos)}
                >
                  <Text style={styles.buttonText}>
                    {mostrarProjetos ? "Esconder Projetos" : "Ver Projetos"}
                  </Text>
                </TouchableOpacity>

                {mostrarProjetos &&
                  projetos.map((p, i) => (
                    <View key={i} style={styles.subCard}>
                      <Text style={styles.projectTitle}>{p.titulo}</Text>
                      <Text>{p.descricao}</Text>
                      <View style={styles.actionRow}>
                        <TouchableOpacity
                          style={styles.smallButton}
                          onPress={() => alert("Editar projeto: " + p.titulo)}
                        >
                          <Text style={styles.smallButtonText}>Editar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[styles.smallButton, { backgroundColor: "#a33" }]}
                          onPress={() => alert("Remover projeto: " + p.titulo)}
                        >
                          <Text style={styles.smallButtonText}>Remover</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))}
              </View>

              {/* BOTÕES INFERIORES */}
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.navigate("home")}
              >
                <Text style={styles.backButtonText}>← Voltar à Página Inicial</Text>
              </TouchableOpacity>

            </View>

            {/* FOOTER */}
            <View style={styles.footerWrapper}>
              <View style={styles.footer}>
                <Text style={styles.footerTitle}>Acolha</Text>
                <Text style={styles.footerText}>
                  Acolhendo vidas. Construindo futuros.
                </Text>

                <View style={styles.socialContainer}>
                  <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/")}>
                    <Image
                      source={require("../../IMG/instragam.png")}
                      style={styles.socialIcon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => Linking.openURL("mailto:contato@acolha.com")}>
                    <Image
                      source={require("../../IMG/email.png")}
                      style={styles.socialIcon}
                    />
                  </TouchableOpacity>
                </View>

                <Text style={styles.footerCopyright}>
                  © 2025 todos os direitos reservados.{"\n"}Acolha é uma marca
                  registrada da Civitas Tech.
                </Text>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// ------------------- ESTILOS ---------------------

const styles = StyleSheet.create({
  background: { flex: 1, width: "100%", paddingTop: 20 },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "space-between",
    minHeight: Dimensions.get("window").height,
  },
  contentContainer: {
    width: "100%",
    maxWidth: 700,
    alignSelf: "center",
    paddingHorizontal: isTablet ? 40 : 20,
  },
  title: {
    fontSize: isTablet ? 28 : 22,
    fontWeight: "bold",
    color: "#255736",
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Questrial-Regular",
    backgroundColor: "#fff",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: isTablet ? 25 : 15,
    marginBottom: 20,
    alignSelf: "center",
    width: "95%",
    maxWidth: 700,
  },
  sectionTitle: {
    fontSize: isTablet ? 20 : 16,
    fontWeight: "bold",
    color: "#357447",
    marginBottom: 10,
    fontFamily: "Questrial-Regular",
  },
  infoItem: {
    fontSize: isTablet ? 16 : 14,
    marginBottom: 6,
    fontFamily: "Questrial-Regular",
  },
  button: {
    backgroundColor: "#357447",
    paddingVertical: isTablet ? 14 : 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: isTablet ? 16 : 14,
    fontFamily: "Questrial-Regular",
  },
  subCard: {
    backgroundColor: "#f0f0f0",
    padding: isTablet ? 15 : 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  projectTitle: {
    fontWeight: "bold",
    color: "#255736",
    marginBottom: 5,
    fontSize: isTablet ? 18 : 14,
    fontFamily: "Questrial-Regular",
  },
  smallButton: {
    backgroundColor: "#357447",
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 6,
    marginTop: 8,
    alignSelf: "flex-start",
  },
  smallButtonText: { color: "white", fontWeight: "bold", fontSize: 14 },
  actionRow: { flexDirection: "row", gap: 10, marginTop: 6 },
  backButton: {
    backgroundColor: "#255736",
    padding: isTablet ? 14 : 10,
    borderRadius: 8,
    marginTop: 25,
    width: "80%",
    maxWidth: 400,
    alignItems: "center",
    alignSelf: "center",
  },
  backButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: isTablet ? 18 : 16,
    fontFamily: "Questrial-Regular",
  },
  footerWrapper: {
    width: "100%",
    backgroundColor: "#357447",
    paddingVertical: isTablet ? 35 : 25,
    marginTop: 60,
  },
  footer: {
    paddingHorizontal: 20,
    alignItems: "center",
    maxWidth: 600,
    alignSelf: "center",
  },
  footerTitle: {
    fontSize: isTablet ? 20 : 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
    fontFamily: "Questrial-Regular",
  },
  footerText: {
    color: "white",
    textAlign: "center",
    marginVertical: 5,
    lineHeight: 22,
    fontSize: isTablet ? 16 : 14,
    fontFamily: "Questrial-Regular",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  socialIcon: { width: 50, height: 50, marginHorizontal: 5 },
  footerCopyright: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
    marginTop: 8,
    fontWeight: "bold",
    fontFamily: "Questrial-Regular",
  },
});
