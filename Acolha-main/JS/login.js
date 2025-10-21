import React, { useState } from 'react';
import { 
  View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, 
  Image, Modal, ImageBackground, Linking, Picker
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [sugestao, setSugestao] = useState('');
  const [tipoPessoa, setTipoPessoa] = useState('fisica'); // valor inicial
  const navigation = useNavigation();

  const handleLogin = () => {
    if (!usuario || !senha) {
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'Por favor, preencha todos os campos antes de acessar!',
        position: 'top',
        visibilityTime: 2500,
      });
      return;
    }

    // Toast único para ambos os tipos
    Toast.show({
      type: 'success',
      text1: 'Login realizado!',
      text2: `Bem-vindo(a)!`,
      position: 'top',
      visibilityTime: 2000,
    });

    setTimeout(() => {
      if (tipoPessoa === 'fisica') {
        navigation.navigate('perfilPF');
      } else {
        navigation.navigate('perfilPJ');
      }
    }, 2000);
  };

  const handleCadastroPF = () => {
    setModalVisible(false);
    navigation.navigate('cadastroPF'); 
  };

  const handleCadastroPJ = () => {
    setModalVisible(false);
    navigation.navigate('cadastroPJ'); 
  };

  return (
    <ImageBackground source={require('../IMG/FundoAcolha.png')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image source={require('../IMG/logotipo_acolha 1_fundo(1).png')} style={styles.logo} />
          </View>

          <View style={styles.card}>
            <TextInput
              style={styles.input}
              placeholder="Usuário"
              value={usuario}
              onChangeText={setUsuario}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
            />

            <View style={styles.pickerContainer}>
              <Text style={styles.pickerLabel}>Tipo de Pessoa</Text>
              <Picker
                selectedValue={tipoPessoa}
                style={styles.picker}
                onValueChange={(itemValue) => setTipoPessoa(itemValue)}
              >
                <Picker.Item label="Pessoa Física" value="fisica" />
                <Picker.Item label="Pessoa Jurídica" value="juridica" />
              </Picker>
            </View>

            <View style={styles.linksContainer}>
              <Text style={styles.link} onPress={() => Toast.show({
                type: 'error',
                text1: 'Recuperação de senha',
                text2: 'Função ainda não implementada.',
                position: 'top',
              })}>
                Esqueci minha senha
              </Text>
              <Text style={styles.link} onPress={() => setModalVisible(true)}>Criar conta</Text>
            </View>

            <TouchableOpacity style={styles.botao} onPress={handleLogin}>
              <Text style={styles.botaoTexto}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.voltarBotao} onPress={() => navigation.navigate('home')}>
              <Text style={styles.voltarTexto}>⬅ Voltar à página inicial</Text>
            </TouchableOpacity>
          </View>

          <Modal
            visible={modalVisible}
            transparent
            animationType="fade"
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Escolha o tipo de cadastro</Text>
                <TouchableOpacity style={styles.modalOption} onPress={handleCadastroPF}>
                  <Text style={styles.modalOptionText}>Pessoa Física</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalOption} onPress={handleCadastroPJ}>
                  <Text style={styles.modalOptionText}>Pessoa Jurídica</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalClose} onPress={() => setModalVisible(false)}>
                  <Text style={styles.modalCloseText}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

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
                value={sugestao}
                onChangeText={setSugestao}
              />
              <TouchableOpacity style={styles.inputButton}>
                <Text style={styles.inputButtonText}>➤</Text>
              </TouchableOpacity>
            </View>
          </View>

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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, width: '100%', height: '100%' },
  scrollContainer: { flexGrow: 1, justifyContent: 'space-between', minHeight: '100%' },
  content: { flex: 1, alignItems: 'center' },

  logoContainer: { alignItems: 'center', marginBottom: 10, marginTop: 20 },
  logo: { width: 150, height: 150, borderRadius: 15 },

  card: { 
    width: '90%', 
    backgroundColor: 'white', 
    borderRadius: 10, 
    padding: 20, 
    shadowColor: '#000', 
    shadowOpacity: 0.1, 
    shadowOffset: { width: 0, height: 4 }, 
    shadowRadius: 4,
    marginBottom: 20,
    marginTop: 40,
  },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 10, marginVertical: 10 },
  linksContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  link: { color: '#357447', textDecorationLine: 'underline', fontSize: 12, marginTop:12 },
  botao: { backgroundColor: '#357447', padding: 15, borderRadius: 6, alignItems: 'center' },
  botaoTexto: { color: '#fff', fontWeight: 'bold' },
  voltarBotao: { marginTop: 15, alignItems: 'center' },
  voltarTexto: { color: '#357447', fontWeight: 'bold' },

  footer: { marginTop: 80, alignItems: 'center', justifyContent: 'center', paddingVertical: 25, backgroundColor: '#357447', width: '100%' },
  footerTitle: { fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 5 },
  footerText: { color: 'white', textAlign: 'center', marginVertical: 5, lineHeight: 20 },
  subscribe: { marginTop: 10, alignItems: 'center', width: '90%' },
  subscribeTitle: { fontSize: 16, fontWeight: 'bold', color: 'white' },
  subscribeText: { textAlign: 'center', marginVertical: 10, color: 'white', lineHeight: 20 },
  inputGroup: { flexDirection: 'row', width: '70%', alignItems: 'center' },
  inputSugestao: { backgroundColor: 'transparent', borderWidth: 1, borderColor: 'white', padding: 10, borderRadius: 5, flex: 1, marginRight: 5, height: 41, color: 'white', marginTop: 15, marginBottom: 15 },
  inputButton: { backgroundColor: '#255736', paddingHorizontal: 15, justifyContent: 'center', borderRadius: 5, height: 41, width:41 },
  inputButtonText: { color: 'white', fontWeight: 'bold',paddingRight: 45},
  socialContainer: { flexDirection: 'row', marginTop: 10, justifyContent: 'center' },
  socialIcon: { width: 35, height: 35, marginHorizontal: 10 },
  footerCopyright: { color: 'white', fontSize: 12, textAlign: 'center', marginTop: 10, marginBottom: 5, fontWeight: 'bold' },

  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  modalContent: { width: '80%', backgroundColor: 'white', borderRadius: 10, padding: 20, alignItems: 'center' },
  modalTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  modalOption: { backgroundColor: '#357447', width: '100%', padding: 15, borderRadius: 6, marginBottom: 6, alignItems: 'center' },
  modalOptionText: { color: 'white', fontWeight: 'bold', fontSize: 14 },
  modalClose: { marginTop: 3},
  modalCloseText: { color: '#357447', fontWeight: 'bold' },

  pickerContainer: { marginTop: 25, width: '100%' },
  pickerLabel: { color: '#357447', fontSize: 14, fontWeight: 'bold', marginBottom: 20 },
  picker: { height: 50, width: '100%', borderWidth: 1, borderColor: '#ccc', borderRadius: 6, paddingLeft: 10, color: '#000', justifyContent: 'center', paddingRight: 90 },
});
