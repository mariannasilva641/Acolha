import React, { useState } from "react";
import { 
  View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, 
  Image, Linking, SafeAreaView, KeyboardAvoidingView, Platform, 
  ImageBackground 
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { toastConfig } from '../App.js'; // mesmo config usado no PJ

export default function CadastroPF() {
  const navigation = useNavigation();

  // Estados dos campos
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nacionalidade, setNacionalidade] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [sugestao, setSugestao] = useState('');

  // Estados de erro
  const [errorNome, setErrorNome] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorSenha, setErrorSenha] = useState('');
  const [errorCpf, setErrorCpf] = useState('');
  const [errorTelefone, setErrorTelefone] = useState('');
  const [errorNacionalidade, setErrorNacionalidade] = useState('');
  const [errorDataNascimento, setErrorDataNascimento] = useState('');

  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function validarCPF(cpf) {
    const cpfLimpo = cpf.replace(/[^\d]+/g, '');
    return cpfLimpo.length === 11;
  }

  function validarFormulario() {
    let valido = true;

    if (nome.trim() === '') { setErrorNome('Por favor, preencha o nome.'); valido = false; } else setErrorNome('');
    if (email.trim() === '') { setErrorEmail('Por favor, preencha o email.'); valido = false; } 
    else if (!validarEmail(email)) { setErrorEmail('Email inválido.'); valido = false; } else setErrorEmail('');
    if (senha.trim() === '') { setErrorSenha('Por favor, preencha a senha.'); valido = false; } 
    else if (senha.length < 6) { setErrorSenha('Senha deve ter pelo menos 6 caracteres.'); valido = false; } else setErrorSenha('');
    if (cpf.trim() === '') { setErrorCpf('Por favor, preencha o CPF.'); valido = false; } 
    else if (!validarCPF(cpf)) { setErrorCpf('CPF inválido. Deve conter 11 números.'); valido = false; } else setErrorCpf('');
    if (telefone.trim() === '') { setErrorTelefone('Por favor, preencha o telefone.'); valido = false; } else setErrorTelefone('');
    if (nacionalidade.trim() === '') { setErrorNacionalidade('Por favor, preencha a nacionalidade.'); valido = false; } else setErrorNacionalidade('');
    if (dataNascimento.trim() === '') { setErrorDataNascimento('Por favor, preencha a data de nascimento.'); valido = false; } else setErrorDataNascimento('');

    return valido;
  }

  function handleCadastrar() {
    if (validarFormulario()) {
      const dados = {
        nome,
        email,
        senha,
        cpf,
        telefone,
        nacionalidade,
        dataNascimento
      };

      Toast.show({
        type: 'success',
        text1: 'Cadastro realizado com sucesso!',
        text2: 'Você será encaminhado...',
        position: 'top',
        visibilityTime: 2000,
      });

      setTimeout(() => {
        navigation.navigate('perfilPF', dados);
      }, 2000);
    } else {
      Toast.show({
        type: 'error',
        text1: 'Campos obrigatórios',
        text2: 'Por favor, verifique os campos e tente novamente.',
        position: 'top',
        visibilityTime: 3000,
      });
    }
  }

  function handleEnviarSugestao() {
    if (sugestao.trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'Sugestão vazia',
        text2: 'Por favor, escreva uma sugestão antes de enviar.',
        position: 'top',
        visibilityTime: 2000,
      });
      return;
    }

    Toast.show({
      type: 'success',
      text1: 'Sugestão enviada',
      text2: 'Obrigado pela sua contribuição!',
      position: 'top',
      visibilityTime: 2000,
    });

    setSugestao('');
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={require('../IMG/FundoCadastro.jpeg')} style={styles.backgroundImage}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        >
          <ScrollView 
            contentContainerStyle={styles.scrollContainer} 
            bounces={false}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.content}>

              <Text style={styles.titulo}>Cadastro - Pessoa Física</Text>

              <View style={styles.card}>
                <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
                {errorNome ? <Text style={styles.errorText}>{errorNome}</Text> : null}

                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                {errorEmail ? <Text style={styles.errorText}>{errorEmail}</Text> : null}

                <TextInput
                  style={styles.input}
                  placeholder="Senha"
                  value={senha}
                  onChangeText={setSenha}
                  secureTextEntry
                />
                {errorSenha ? <Text style={styles.errorText}>{errorSenha}</Text> : null}

                <TextInput
                  style={styles.input}
                  placeholder="CPF"
                  value={cpf}
                  onChangeText={setCpf}
                  keyboardType="number-pad"
                />
                {errorCpf ? <Text style={styles.errorText}>{errorCpf}</Text> : null}

                <TextInput
                  style={styles.input}
                  placeholder="Telefone"
                  value={telefone}
                  onChangeText={setTelefone}
                  keyboardType="phone-pad"
                />
                {errorTelefone ? <Text style={styles.errorText}>{errorTelefone}</Text> : null}

                <TextInput
                  style={styles.input}
                  placeholder="Nacionalidade"
                  value={nacionalidade}
                  onChangeText={setNacionalidade}
                />
                {errorNacionalidade ? <Text style={styles.errorText}>{errorNacionalidade}</Text> : null}

                <TextInput
                  style={styles.input}
                  placeholder="Data de Nascimento"
                  value={dataNascimento}
                  onChangeText={setDataNascimento}
                />
                {errorDataNascimento ? <Text style={styles.errorText}>{errorDataNascimento}</Text> : null}

                <TouchableOpacity style={styles.botao} onPress={handleCadastrar}>
                  <Text style={styles.botaoTexto}>Cadastrar</Text>
                </TouchableOpacity>
              </View>
                  <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate('home')}>
                <Text style={styles.textoVoltar}>← Voltar à Página Inicial</Text>
              </TouchableOpacity>
            </View>

            {/* Footer */}
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
                  <TouchableOpacity style={styles.inputButton} onPress={handleEnviarSugestao}>
                    <Text style={styles.inputButtonText}>➤</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.socialContainer}>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/')}>
                  <Image source={require('../IMG/instragam.png')} style={styles.socialIcon} />
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
        </KeyboardAvoidingView>

        <Toast config={toastConfig} />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#E5E5E5" },
  scrollContainer: { 
    alignItems: 'center', 
    flexGrow: 1,            // <-- aqui, para ocupar a altura disponível
    justifyContent: 'space-between',  // <-- espaço entre conteúdo e footer
  },
  content: { width: '100%', alignItems: 'center' },
  titulo: { fontSize: 24, fontWeight: "bold", color: "#357447", marginVertical: 20, textAlign: "center" },
  card: { width: "90%", backgroundColor: "white", padding: 20, borderRadius: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 5, elevation: 5 },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10, marginVertical: 8, backgroundColor: '#fff' },
  botao: { backgroundColor: "#357447", padding: 15, borderRadius: 8, marginTop: 15, alignItems: "center" },
  botaoTexto: { color: "white", fontWeight: "bold" },
 botaoVoltar: {marginBottom: 10, marginTop: 20, backgroundColor: '#357447', paddingVertical: 8, paddingHorizontal: 12,borderRadius: 6,alignItems: 'center', alignSelf: 'center',  },
  textoVoltar: { color: '#fff', fontWeight: 'bold' },
  footer: { 
    width: '100%', 
    backgroundColor: '#357447', 
    alignItems: 'center', 
    paddingVertical: 25,
   marginTop:40
  },
  footerTitle: { fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 5 },
  footerText: { color: 'white', textAlign: 'center', marginVertical: 5, lineHeight: 20 },
  subscribe: { marginTop: 10, alignItems: 'center', width: '90%' },
  subscribeTitle: { fontSize: 16, fontWeight: 'bold', color: 'white' },
  subscribeText: { textAlign: 'center', marginVertical: 10, color: 'white', lineHeight: 20 },
  inputGroup: { flexDirection: 'row', width: '70%', alignItems: 'center' },
  inputSugestao: { backgroundColor: 'transparent', borderWidth: 1, borderColor: 'white', padding: 10, borderRadius: 5, flex: 1, marginRight: 5, marginTop:2, marginBottom:15, height: 41, color: 'white' },
  inputButton: { backgroundColor: '#255736', paddingHorizontal: 15, justifyContent: 'center', borderRadius: 5, height: 41 },
  inputButtonText: { color: 'white', fontWeight: 'bold' },
  socialContainer: { flexDirection: 'row', marginTop: 2, justifyContent: 'center' },
  socialIcon: { width: 50, height: 50, marginHorizontal: 0.2 },
  errorText: { color: 'red', marginBottom: 8, fontSize: 12 },
  footerCopyright: { color: 'white', fontSize: 12, textAlign: 'center', marginTop: 5, fontWeight: 'bold' },
  backgroundImage: { flex: 1, width: '100%', height: '100%' },
});
