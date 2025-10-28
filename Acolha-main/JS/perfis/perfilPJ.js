import React from "react";
import {View,Text,ScrollView,TextInput,TouchableOpacity,Image,Linking,SafeAreaView,} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import styles from "../estilo/estiloPerfis/estiloPerfilPJ.js";

export default function PerfilPJ() {
  const route = useRoute();
  const navigation = useNavigation();

  const {
    nome = "Empresa Exemplo",
    email = "contato@empresa.com",
    senha = "123456",
    cnpj = "00.000.000/0001-00",
    telefone = "(11) 99999-9999",
    nomeRepresentante = "João",
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
            onPress={() =>
              navigation.navigate("editarPerfilPJ", {
                nome,
                email,
                senha,
                cnpj,
                telefone,
                nomeRepresentante,
                cargo,
                areaAtuacao,
                mensagem,
              })
            }
          >
            <Text style={styles.botaoTexto}>Editar Dados</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Projetos que a empresa apoia</Text>
          {projetosApoiados.map((projeto) => (
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
        <View style={styles.footerWrapper}>
          <View style={styles.footer}>
            <Text style={styles.footerTitle}>Acolha</Text>
            <Text style={styles.footerText}>Acolhendo vidas. Construindo Futuros</Text>

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
    </SafeAreaView>
  );
}
