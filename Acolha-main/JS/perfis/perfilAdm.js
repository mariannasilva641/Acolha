import React, { useState } from "react";
import {View,Text,ScrollView,ImageBackground,TouchableOpacity,Image,Linking,SafeAreaView,KeyboardAvoidingView,Platform,} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "../estilo/estiloPerfis/estiloPerfilAdm.js";

// Dados de usuários e projetos
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
    titulo: "Missão Paz",
    descricao:
      "Instituição filantrópica que apoia e acolhe imigrantes e refugiados em São Paulo desde os anos 1930...",
  },
  {
    titulo: "Cidades Invisíveis",
    descricao:
      "Atua desde 2012 promovendo inclusão social, acesso ao conhecimento, tecnologia, saúde...",
  },
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

              {/* USUÁRIOS PF */}
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

              {/* USUÁRIOS PJ */}
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

              {/* PROJETOS */}
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

              {/* BOTÃO VOLTAR */}
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
