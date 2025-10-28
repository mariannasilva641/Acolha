import React, { useState } from 'react';
import { 
  View, Text, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, 
  Image, TextInput, Linking, Dimensions, SafeAreaView, KeyboardAvoidingView, Platform 
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

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

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    paddingTop: 20,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
    minHeight: Dimensions.get('window').height,
  },

  contentContainer: {
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
    paddingHorizontal: isTablet ? 40 : 20,
  },
  title: {
    fontSize: isTablet ? 28 : 22,
    fontWeight: 'bold',
    color: '#255736',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily:'Questrial-Regular',
    backgroundColor:'#FFFFFF'
  },
  card: {
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: isTablet ? 25 : 15,
    marginBottom: 20,
    alignSelf: 'center',
    maxWidth: 600,
  },
  sectionTitle: {
    fontSize: isTablet ? 20 : 16,
    fontWeight: 'bold',
    color: '#357447',
    marginBottom: 10,
    fontFamily:'Questrial-Regular'
  },
  infoItem: {
    fontSize: isTablet ? 16 : 14,
    marginBottom: 6,
    fontFamily:'Questrial-Regular'
  },
  button: {
    backgroundColor: '#357447',
    paddingVertical: isTablet ? 14 : 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: isTablet ? 16 : 14,
    fontFamily:'Questrial-Regular'
  },
  subCard: {
    backgroundColor: '#f0f0f0',
    padding: isTablet ? 15 : 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  projectTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#255736',
    fontSize: isTablet ? 18 : 14,
    fontFamily:'Questrial-Regular'
  },
  projectImage: {
    width: '100%',
    height: isTablet ? 140 : 100,
    borderRadius: 8,
    marginBottom: 5,
  },
  linkText: {
    color: '#357447',
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: isTablet ? 16 : 14,
    fontFamily:'Questrial-Regular'
  },
  backButton: {
    backgroundColor: '#255736',
    padding: isTablet ? 14 : 10,
    borderRadius: 8,
    marginTop: 30,
    width: '80%',
    maxWidth: 400,
    alignItems: 'center',
    alignSelf: 'center',
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: isTablet ? 18 : 16,
    fontFamily:'Questrial-Regular'
  },
  editButton: {
    backgroundColor: '#255736',
    paddingVertical: isTablet ? 14 : 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 25,
    width: '100%',
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: isTablet ? 16 : 14,
    fontFamily:'Questrial-Regular'
  },

  // Footer responsivo
  footerWrapper: {
    width: '100%',
    backgroundColor: '#357447',
    paddingVertical: isTablet ? 35 : 25,
    marginTop:60
  },
  footer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    maxWidth: 600,
    alignSelf: 'center',
  },
  footerTitle: {
    fontSize: isTablet ? 20 : 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
    fontFamily:'Questrial-Regular'
  },
  footerText: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 5,
    lineHeight: 22,
    fontSize: isTablet ? 16 : 14,
    fontFamily:'Questrial-Regular'
  },
  subscribe: {
    marginTop: 10,
    alignItems: 'center',
    width: '100%',
  },
  subscribeTitle: {
    fontSize: isTablet ? 18 : 16,
    fontWeight: 'bold',
    color: 'white',
    fontFamily:'Questrial-Regular'
  },
  subscribeText: {
    textAlign: 'center',
    marginVertical: 10,
    color: 'white',
    lineHeight: 22,
    fontSize: isTablet ? 15 : 14,
    fontFamily:'Questrial-Regular'
  },
  inputGroup: {
    flexDirection: 'row',
    width: isTablet ? '70%' : '85%',
    maxWidth: 400,
    alignItems: 'center',
  },
  inputSugestao: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
    marginTop: 15,
    marginBottom: 2,
    height: 34,
    color: 'white',
    fontFamily:'Questrial-Regular'
  },
  inputButton: {
    backgroundColor: '#255736',
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderRadius: 5,
    height: 41,
  },
  inputButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: 2,
    justifyContent: 'center',
  },
  socialIcon: {
    width: 50,
    height: 50,
    marginHorizontal:0.2,
  },
  footerCopyright: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
    fontFamily:'Questrial-Regular'
  },
});
