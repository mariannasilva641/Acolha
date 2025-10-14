import React, { useState } from 'react';
import { 
  View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, 
  Image, Modal, ImageBackground 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [sugestao, setSugestao] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log('Tentando login com:', { usuario, senha });
    navigation.navigate('home'); 
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
      <ScrollView 
        contentContainerStyle={styles.container} 
        showsVerticalScrollIndicator={false} 
        bounces={false}
      >
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image source={require('../IMG/width_500.webp')} style={styles.logo} />
        </View>

        {/* Formulário de login */}
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

          <View style={styles.linksContainer}>
            <Text style={styles.link} onPress={() => console.log('Esqueci minha senha')}>
              Esqueci minha senha
            </Text>
            <Text style={styles.link} onPress={() => setModalVisible(true)}>
              Criar conta
            </Text>
          </View>

          <TouchableOpacity style={styles.botao} onPress={handleLogin}>
            <Text style={styles.botaoTexto}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.voltarBotao} onPress={() => navigation.navigate('home')}>
            <Text style={styles.voltarTexto}>⬅ Voltar à página inicial</Text>
          </TouchableOpacity>
        </View>

        {/* Modal para escolher PF ou PJ */}
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

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerTitulo}>Acolha</Text>
          <Text style={styles.footerTexto}>Acolhendo vidas.{"\n"}Construindo Futuros</Text>

          <View style={styles.subscribe}>
            <Text style={styles.subscribeTitle}>Sugestões</Text>
            <Text style={styles.subscribeText}>
              Envie aqui suas sugestões, dúvidas ou críticas.{"\n"}
              Sua opinião é muito importante para nós!
            </Text>

            <View style={styles.inputGroup}>
              <TextInput
                placeholder="Sua Sugestão"
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

          <Text style={styles.footerCopyright}>
            © 2025 todos os direitos reservados.{"\n"}Acolha é uma marca registrada da Civitas Tech.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: 'transparent',
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  logo: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
  },
  card: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    marginBottom: 190, // dá um respiro entre o card e o rodapé
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginVertical: 10,
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  link: {
    color: '#357447',
    textDecorationLine: 'underline',
    fontSize: 12,
  },
  botao: {
    backgroundColor: '#357447',
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  voltarBotao: {
    marginTop: 15,
    alignItems: 'center',
  },
  voltarTexto: {
    color: '#357447',
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 25,
    backgroundColor: '#357447',
    width: '100%',
    height:'35%'
  },
  footerTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  footerTexto: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 5,
    lineHeight: 20,
  },
  subscribe: {
    marginTop: 10,
    alignItems: 'center',
    width: '90%',
  },
  subscribeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  subscribeText: {
    textAlign: 'center',
    marginVertical: 10,
    color: 'white',
    lineHeight: 20,
  },
  inputGroup: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  inputSugestao: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
    height: 41,
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
  footerCopyright: {
    color: '#ccc',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 15,
    lineHeight: 18,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalOption: {
    backgroundColor: '#357447',
    width: '100%',
    padding: 15,
    borderRadius: 6,
    marginBottom: 10,
    alignItems: 'center',
  },
  modalOptionText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  modalClose: {
    marginTop: 5,
  },
  modalCloseText: {
    color: '#357447',
    fontWeight: 'bold',
  },
});
