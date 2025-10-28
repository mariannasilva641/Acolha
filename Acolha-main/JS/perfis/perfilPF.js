import React, { useState } from 'react';
import { View, Text,ScrollView, ImageBackground, TouchableOpacity, Image, TextInput, Linking, Dimensions, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from "../estilo/estiloPerfis/estiloPerfilPF.js";

const projetos = [
  {
    titulo: 'Instituto Adus',
    descricao: 'Atuamos em parceria com solicitantes de refúgio, refugiados e outras pessoas em situação de deslocamento forçado.',
    imagem: require('../../IMG/adus.jpeg'),
    link: 'https://adus.org.br/',
  },
  {
    titulo: 'Cidades Invisíveis',
    descricao: 'Atua desde 2012 promovendo inclusão social, acesso ao conhecimento, tecnologia, saúde...',
    imagem: require('../../IMG/cidadesInvisiveis.webp'),
    link: 'https://cidadesinvisiveis.com.br/',
  },
];

const solicitacoes = [
  {
    tipo: 'Refúgio',
    motivo: 'Fuga de conflitos em país de origem',
    andamento: 'Em análise pelo governo',
  },
  {
    tipo: 'Retorno',
    motivo: 'Desejo de voltar ao Brasil',
    andamento: 'Aguardando documentação',
  },
];

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const isTablet = SCREEN_WIDTH >= 768;

export default function PerfilPF() {
  const navigation = useNavigation();
  const route = useRoute();
  const { nome, email, cpf, telefone, nacionalidade, dataNascimento } = route.params || {};

  const [mostrarProjetos, setMostrarProjetos] = useState(false);
  const [mostrarSolicitacoes, setMostrarSolicitacoes] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ImageBackground
          source={require('../../IMG/FundoAcolha.png')}
          style={styles.background}
          resizeMode="cover"
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.contentContainer}>
              <Text style={styles.title}>Perfil - Pessoa Física</Text>

              {/* INFORMAÇÕES PESSOAIS */}
              <View style={styles.card}>
                <Text style={styles.sectionTitle}>Informações Pessoais</Text>
                <Text style={styles.infoItem}>👤 Nome: {nome || 'Não informado'}</Text>
                <Text style={styles.infoItem}>📧 Email: {email || 'Não informado'}</Text>
                <Text style={styles.infoItem}>📱 Telefone: {telefone || 'Não informado'}</Text>
                <Text style={styles.infoItem}>🪪 CPF: {cpf || 'Não informado'}</Text>
                <Text style={styles.infoItem}>🌎 Nacionalidade: {nacionalidade || 'Não informado'}</Text>
                <Text style={styles.infoItem}>🎂 Data de Nascimento: {dataNascimento || 'Não informado'}</Text>

                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() =>
                    navigation.navigate('editarPerfilPF', {
                      nome,
                      email,
                      telefone,
                      cpf,
                      nacionalidade,
                      dataNascimento,
                    })
                  }
                >
                  <Text style={styles.editButtonText}>✏️ Editar Perfil</Text>
                </TouchableOpacity>
              </View>

              {/* PROJETOS INSCRITOS */}
              <View style={styles.card}>
                <Text style={styles.sectionTitle}>Projetos Inscritos</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setMostrarProjetos(!mostrarProjetos)}
                >
                  <Text style={styles.buttonText}>
                    {mostrarProjetos ? 'Esconder Projetos' : 'Ver Projetos'}
                  </Text>
                </TouchableOpacity>

                {mostrarProjetos &&
                  projetos.map((p, i) => (
                    <View key={i} style={styles.subCard}>
                      <Image source={p.imagem} style={styles.projectImage} />
                      <Text style={styles.projectTitle}>{p.titulo}</Text>
                      <Text>{p.descricao}</Text>
                      <TouchableOpacity onPress={() => Linking.openURL(p.link)}>
                        <Text style={styles.linkText}>Saiba Mais</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
              </View>

              {/* SOLICITAÇÕES */}
              <View style={styles.card}>
                <Text style={styles.sectionTitle}>Solicitações</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setMostrarSolicitacoes(!mostrarSolicitacoes)}
                >
                  <Text style={styles.buttonText}>
                    {mostrarSolicitacoes ? 'Esconder Solicitações' : 'Ver Solicitações'}
                  </Text>
                </TouchableOpacity>

                {mostrarSolicitacoes &&
                  solicitacoes.map((s, i) => (
                    <View key={i} style={styles.subCard}>
                      <Text style={styles.projectTitle}>Tipo: {s.tipo}</Text>
                      <Text>Motivo: {s.motivo}</Text>
                      <Text>Andamento: {s.andamento}</Text>
                    </View>
                  ))}
              </View>

              {/* VOLTAR */}
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.navigate('home')}
              >
                <Text style={styles.backButtonText}>← Voltar à Página Inicial</Text>
              </TouchableOpacity>
            </View>

            {/* FOOTER RESPONSIVO */}
            <View style={styles.footerWrapper}>
              <View style={styles.footer}>
                <Text style={styles.footerTitle}>Acolha</Text>
                <Text style={styles.footerText}>
                  Acolhendo vidas. Construindo Futuros
                </Text>

                <View style={styles.subscribe}>
                  <Text style={styles.subscribeTitle}>Sugestões</Text>
                  <Text style={styles.subscribeText}>
                    Envie aqui suas sugestões, dúvidas ou críticas.{"\n"}Sua opinião é
                    muito importante para nós!
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
                  <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/')}>
                    <Image
                      source={require('../../IMG/instragam.png')}
                      style={styles.socialIcon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => Linking.openURL('mailto:contato@acolha.com')}>
                    <Image
                      source={require('../../IMG/email.png')}
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

 