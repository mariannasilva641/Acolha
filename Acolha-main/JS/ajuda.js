import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Dimensions,
  Image,
  Linking,
  ImageBackground,
} from 'react-native';
import Toast from 'react-native-toast-message';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const isTablet = SCREEN_WIDTH >= 768;

export default function Ajuda() {
  const [mensagem, setMensagem] = useState('');

  const showToast = (type, text1) => {
    Toast.show({
      type,
      text1,
      position: 'top',
      visibilityTime: 2500,
      autoHide: true,
    });
  };

  const enviarMensagem = () => {
    if (!mensagem.trim()) {
      showToast('error', 'Por favor, escreva sua mensagem antes de enviar.');
      return;
    }
    showToast('success', 'Mensagem enviada com sucesso! Obrigado pelo contato.');
    setMensagem('');
  };

  const abrirLink = (url, toastMsg) => {
    showToast('info', toastMsg);
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        setTimeout(() => Linking.openURL(url), 1500);
      } else {
        showToast('error', 'Não foi possível abrir o link.');
      }
    });
  };

  const abrirURL = (url) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        showToast('error', 'Não foi possível abrir o link.');
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../IMG/FundoAcolha.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.container}>
              <Text style={styles.title}>Ajuda e Solicitações</Text>

              <View style={styles.imageWrapper}>
                <Image
                  source={require('../IMG/ajuda.jpg')}
                  style={styles.imageHeader}
                  resizeMode="cover"
                />
              </View>

              <Text style={styles.subtitle}>
                Precisa de ajuda? Envie uma mensagem ou acesse os serviços abaixo.
              </Text>

              {/* Formulário */}
              <View style={styles.form}>
                <Text style={styles.label}>Sua mensagem</Text>
                <TextInput
                  style={styles.input}
                  multiline
                  numberOfLines={5}
                  placeholder="Escreva aqui sua dúvida ou solicitação"
                  placeholderTextColor="#999"
                  value={mensagem}
                  onChangeText={setMensagem}
                  textAlignVertical="top"
                />
                <TouchableOpacity style={styles.buttonEnviar} onPress={enviarMensagem}>
                  <Text style={styles.buttonText}>Enviar Mensagem</Text>
                </TouchableOpacity>
              </View>

              {/* Menu dinâmico com ícones */}
              <Text style={styles.menuTitle}>Acesso Rápido</Text>
              <View style={styles.menuGrid}>
                {[
                  {
                    label: 'Voltar ao Home',
                    icon: require('../IMG/home-icon-silhouette.png'),
                    onPress: () => abrirLink('home', 'Voltando à tela inicial...'),
                  },
                  {
                    label: 'Solicitar Refúgio',
                    icon: require('../IMG/refugio.png'),
                    onPress: () =>
                      abrirLink(
                        'https://www.gov.br/pt-br/servicos/solicitar-refugio',
                        'Acessando solicitação de refúgio...'
                      ),
                  },
                  {
                    label: 'Solicitar Retorno',
                    icon: require('../IMG/retorno.webp'),
                    onPress: () =>
                      abrirLink(
                        'https://www.gov.br/pt-br/servicos/solicitar-autorizacao-de-retorno-ao-brasil',
                        'Acessando solicitação de retorno...'
                      ),
                  },
                  {
                    label: 'Leis dos Imigrantes',
                    icon: require('../IMG/lei_de_migracao.png'),
                    onPress: () =>
                      abrirLink(
                        'https://www.gov.br/mdh/pt-br/navegue-por-temas/migrantes-refugiados-e-apatridas',
                        'Abrindo leis dos imigrantes...'
                      ),
                  },
                  {
                    label: 'Direitos Humanos',
                    icon: require('../IMG/direitosHumanos.jpg'),
                    onPress: () =>
                      abrirLink(
                        'https://www.un.org/sites/un2.un.org/files/udhr.pdf',
                        'Abrindo Declaração dos Direitos Humanos...'
                      ),
                  },
                ].map((item, index) => (
                  <TouchableOpacity key={index} style={styles.menuItem} onPress={item.onPress}>
                    <Image source={item.icon} style={styles.menuIcon} />
                    <Text style={styles.menuLabel}>{item.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Footer */}
            <View style={styles.footerWrapper}>
              <View style={styles.footer}>
                <Text style={styles.footerTitle}>Acolha</Text>
                <Text style={styles.footerText}>Acolhendo vidas. Construindo Futuros</Text>

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
                  <TouchableOpacity onPress={() => abrirURL('https://www.instagram.com/')}>
                    <Image source={require('../IMG/instragam.png')} style={styles.socialIcon} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => abrirURL('mailto:contato@acolha.com')}>
                    <Image source={require('../IMG/email.png')} style={styles.socialIcon} />
                  </TouchableOpacity>
                </View>

                <Text style={styles.footerCopyright}>
                  © 2025 todos os direitos reservados.{"\n"}Acolha é uma marca registrada da Civitas Tech.
                </Text>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        <Toast />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
    minHeight: Dimensions.get('window').height,
  },
  container: {
    paddingHorizontal: isTablet ? 40 : 20,
    paddingTop: 20,
    maxWidth: 600,
    alignSelf: 'center',
    alignItems: 'center', // centraliza conteúdo horizontalmente
  },
  title: {
    fontSize: isTablet ? 28 : 24,
    fontWeight: 'bold',
    color: '#255736',
    textAlign: 'center',
  },
  imageWrapper: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    overflow: 'hidden',
    marginTop: 40,
    // alignSelf: 'center', // já centralizado pelo container
  },
  imageHeader: {
    width: '100%',
    height: '100%',
  },

  subtitle: {
    fontSize: isTablet ? 18 : 16,
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
    width:'95%'
  },
  label: {
    fontWeight: 'bold',
    color: '#255736',
    marginBottom: 10,
    fontSize: 16,
  },
  input: {
    borderColor: '#357447',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: '#333',
    backgroundColor: '#fff',
    textAlignVertical: 'top',
  },
  buttonEnviar: {
    backgroundColor: '#357447',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#255736',
    marginBottom: 10,
    textAlign: 'center',
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  menuItem: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#357447',
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  menuIcon: {
    width: '100%',
    height: 80,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  menuLabel: {
    textAlign: 'center',
    fontWeight: '600',
    color: '#255736',
  },
  footerWrapper: {
    width: '100%',
    backgroundColor: '#357447',
    paddingVertical: isTablet ? 35 : 25,
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
  },
  footerText: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 5,
    lineHeight: 22,
    fontSize: isTablet ? 16 : 14,
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
  },
  subscribeText: {
    textAlign: 'center',
    marginVertical: 10,
    color: 'white',
    lineHeight: 22,
    fontSize: isTablet ? 15 : 14,
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
    marginBottom: 5,
    height: 41,
    color: 'white',
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
    marginHorizontal: 0.2,
  },
  footerCopyright: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
