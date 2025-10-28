import React, { useState } from 'react';
import {View, Text, TextInput,TouchableOpacity, ScrollView,Image, Modal, ImageBackground, Linking} from 'react-native';
import styles from "../estilo/estiloLoginCadastro/estiloLogin.js";
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import Toast from 'react-native-toast-message';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [sugestao, setSugestao] = useState('');
  const [tipoPessoa, setTipoPessoa] = useState('fisica');
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

    Toast.show({
      type: 'success',
      text1: 'Login realizado!',
      text2: `Bem-vindo(a)!`,
      position: 'top',
      visibilityTime: 2000,
    });

    // Navegar após o toast sumir
    setTimeout(() => {
      if (tipoPessoa === 'fisica') {
        navigation.navigate('perfilPF');
      } else if (tipoPessoa === 'juridica') {
        navigation.navigate('perfilPJ');
      } else if (tipoPessoa === 'adm') {
        navigation.navigate('perfilAdm');
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

  const handleCadastroAdm = () => {
    setModalVisible(false);
    navigation.navigate('perfilAdm');
  };

  return (
    <ImageBackground
      source={require('../../IMG/FundoAcolha.png')}
      style={styles.background}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View style={styles.content}>
          <View style={styles.card}>
            {/* LOGO */}
            <View style={styles.logoContainer}>
              <Image
                source={require('../../IMG/width_500.webp')}
                style={styles.logo}
              />
            </View>

            {/* Inputs */}
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

            {/* Picker tipo de pessoa */}
            <View style={styles.pickerContainer}>
              <Text style={styles.pickerLabel}>Tipo de Pessoa</Text>
              <Picker
                selectedValue={tipoPessoa}
                style={styles.picker}
                onValueChange={(itemValue) => setTipoPessoa(itemValue)}
              >
                <Picker.Item label="Pessoa Física" value="fisica" />
                <Picker.Item label="Pessoa Jurídica" value="juridica" />
                <Picker.Item label="Administrador" value="adm" />
              </Picker>
            </View>

            {/* Links */}
            <View style={styles.linksContainer}>
              <Text
                style={styles.link}
                onPress={() =>
                  Toast.show({
                    type: 'error',
                    text1: 'Recuperação de senha',
                    text2: 'Função ainda não implementada.',
                    position: 'top',
                  })
                }
              >
                Esqueci minha senha
              </Text>

              <Text style={styles.link} onPress={() => setModalVisible(true)}>
                Criar conta
              </Text>
            </View>

            {/* Botões */}
            <TouchableOpacity style={styles.botao} onPress={handleLogin}>
              <Text style={styles.botaoTexto}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.voltarBotao}
              onPress={() => navigation.navigate('home')}
            >
              <Text style={styles.voltarTexto}>⬅ Voltar à página inicial</Text>
            </TouchableOpacity>
          </View>

          {/* MODAL DE CADASTRO */}
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

        {/* FOOTER */}
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
              <Image source={require('../../IMG/instragam.png')} style={styles.socialIcon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL('mailto:contato@acolha.com')}>
              <Image source={require('../../IMG/email.png')} style={styles.socialIcon} />
            </TouchableOpacity>
          </View>

          <Text style={styles.footerCopyright}>
            © 2025 todos os direitos reservados.{"\n"}
            Acolha é uma marca registrada da Civitas Tech.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

  