import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,ScrollView,KeyboardAvoidingView,Platform,SafeAreaView,Dimensions,Image,Linking,ImageBackground,} from 'react-native';
import styles from "../estilo/estiloPagInfo/estiloAjuda.js";
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const isTablet = SCREEN_WIDTH >= 768;

export default function Ajuda() {
  const navigation = useNavigation();
  const [mensagem, setMensagem] = useState('');

  const showToast = (type, text1) => {
    Toast.show({
      type,
      text1,
      position: 'top',
      visibilityTime: 2500,
      autoHide: true,
      fontFamily:'Questrial-Regular',
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
        source={require('../../IMG/FundoAcolha.png')}
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
                  source={require('../../IMG/ajuda.jpg')}
                  style={styles.imageHeader}
                  resizeMode="cover"
                />
              </View>

              <Text style={styles.subtitle}>
                Precisa de ajuda? Envie uma mensagem ou acesse os serviços abaixo.
              </Text>

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

              <Text style={styles.menuTitle}>Acesso Rápido</Text>
              <View style={styles.menuGrid}>
                {[
                  {
                    label: 'Voltar ao Home',
                    icon: require('../../IMG/home-icon-silhouette.png'),
                    onPress: () => {
                      showToast('info', 'Voltando à tela inicial...');
                      setTimeout(() => navigation.navigate('home'), 1500);
                    },
                  },
                  {
                    label: 'Solicitar Refúgio',
                    icon: require('../../IMG/refugio.png'),
                    onPress: () =>
                      abrirLink(
                        'https://www.gov.br/pt-br/servicos/solicitar-refugio',
                        'Acessando solicitação de refúgio...'
                      ),
                  },
                  {
                    label: 'Solicitar Retorno',
                    icon: require('../../IMG/retorno.webp'),
                    onPress: () =>
                      abrirLink(
                        'https://www.gov.br/pt-br/servicos/solicitar-autorizacao-de-retorno-ao-brasil',
                        'Acessando solicitação de retorno...'
                      ),
                  },
                  {
                    label: 'Leis dos Imigrantes',
                    icon: require('../../IMG/lei_de_migracao.png'),
                    onPress: () =>
                      abrirLink(
                        'https://www.gov.br/mdh/pt-br/navegue-por-temas/migrantes-refugiados-e-apatridas',
                        'Abrindo leis dos imigrantes...'
                      ),
                  },
                  {
                    label: 'Direitos Humanos',
                    icon: require('../../IMG/direitosHumanos.jpg'),
                    onPress: () =>
                      abrirLink(
                        'https://www.un.org/sites/un2.un.org/files/udhr.pdf',
                        'Abrindo Declaração dos Direitos Humanos...'
                      ),
                  },
                  {
                    label: 'Obter Documentos',
                    icon: require('../../IMG/documentos.jpeg'),
                    onPress: () =>
                      abrirLink(
                        'https://www.gov.br/pt-br/servicos/registrar-se-como-estrangeiro-no-brasil',
                        'Acessando página para obtenção de documentos...'
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
                    <Image source={require('../../IMG/instragam.png')} style={styles.socialIcon} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => abrirURL('mailto:contato@acolha.com')}>
                    <Image source={require('../../IMG/email.png')} style={styles.socialIcon} />
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
