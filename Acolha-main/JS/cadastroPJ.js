import React, { useState } from "react";
import { 
  View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, 
  Image, Linking, SafeAreaView, KeyboardAvoidingView, Platform, 
  ImageBackground 
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { toastConfig } from '../App.js'; // onde você criou o toastConfig

export default function CadastroPJ() {
  const navigation = useNavigation();

  // Estados dos campos
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [emailDomain, setEmailDomain] = useState('');
  const [senha, setSenha] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nomeRepresentante, setNomeRepresentante] = useState('');
  const [cargo, setCargo] = useState('');
  const [areaAtuacao, setAreaAtuacao] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [sugestao, setSugestao] = useState(''); // para sugestão no footer

  // Estados de erro
  const [errorNome, setErrorNome] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorEmailDomain, setErrorEmailDomain] = useState('');
  const [errorSenha, setErrorSenha] = useState('');
  const [errorCnpj, setErrorCnpj] = useState('');
  const [errorTelefone, setErrorTelefone] = useState('');
  const [errorNomeRepresentante, setErrorNomeRepresentante] = useState('');
  const [errorCargo, setErrorCargo] = useState('');
  const [errorAreaAtuacao, setErrorAreaAtuacao] = useState('');
  const [errorMensagem, setErrorMensagem] = useState('');

  function validarEmail(emailCompleto) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(emailCompleto);
  }

  function validarCNPJ(cnpj) {
    const cnpjLimpo = cnpj.replace(/[^\d]+/g, '');
    return cnpjLimpo.length === 14;
  }

  function validarFormulario() {
    let valido = true;

    if (nome.trim() === '') { setErrorNome('Por favor, preencha o nome.'); valido = false; } else setErrorNome('');
    if (email.trim() === '') { setErrorEmail('Por favor, preencha o email.'); valido = false; } else setErrorEmail('');
    if (emailDomain.trim() === '') { setErrorEmailDomain('Por favor, preencha o domínio.'); valido = false; } else setErrorEmailDomain('');

    if (email.trim() !== '' && emailDomain.trim() !== '') {
      const emailCompleto = email.trim() + emailDomain.trim();
      if (!validarEmail(emailCompleto)) {
        setErrorEmail('Email inválido.');
        valido = false;
      } else {
        setErrorEmail('');
      }
    }

    if (senha.trim() === '') {
      setErrorSenha('Por favor, preencha a senha.');
      valido = false;
    } else if (senha.trim().length < 6) {
      setErrorSenha('Senha deve ter pelo menos 6 caracteres.');
      valido = false;
    } else {
      setErrorSenha('');
    }

    if (cnpj.trim() === '') {
      setErrorCnpj('Por favor, preencha o CNPJ.');
      valido = false;
    } else if (!validarCNPJ(cnpj)) {
      setErrorCnpj('CNPJ inválido. Deve ter 14 números.');
      valido = false;
    } else {
      setErrorCnpj('');
    }

    if (telefone.trim() === '') { setErrorTelefone('Por favor, preencha o telefone.'); valido = false; } else setErrorTelefone('');
    if (nomeRepresentante.trim() === '') { setErrorNomeRepresentante('Por favor, preencha o nome do representante.'); valido = false; } else setErrorNomeRepresentante('');
    if (cargo.trim() === '') { setErrorCargo('Por favor, preencha o cargo.'); valido = false; } else setErrorCargo('');
    if (areaAtuacao.trim() === '') { setErrorAreaAtuacao('Por favor, preencha a área de atuação.'); valido = false; } else setErrorAreaAtuacao('');
    if (mensagem.trim() === '') { setErrorMensagem('Por favor, preencha a mensagem.'); valido = false; } else setErrorMensagem('');

    return valido;
  }

  function handleCadastrar() {
    if (validarFormulario()) {
      const dados = {
        nome,
        email: email + emailDomain,
        senha,
        cnpj,
        telefone,
        nomeRepresentante,
        cargo,
        areaAtuacao,
        mensagem,
      };

      Toast.show({
        type: 'success',
        text1: 'Cadastro realizado com sucesso!',
        text2: 'Você será encaminhado...',
        position: 'top',
        visibilityTime: 2000,
      });

      setTimeout(() => {
        navigation.navigate('perfilPJ', dados);
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

    // Aqui você pode fazer a lógica para enviar a sugestão para backend ou API
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
              <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate('home')}>
                <Text style={styles.textoVoltar}>← Voltar à Página Inicial</Text>
              </TouchableOpacity>
              
              <Text style={styles.titulo}>Cadastro - Pessoa Jurídica</Text>

              <View style={styles.card}>
                <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
                {errorNome ? <Text style={styles.errorText}>{errorNome}</Text> : null}

                <View style={styles.row}>
                  <View style={{ flex: 2 }}>
                    <TextInput
                      style={styles.inputFlex2}
                      placeholder="Email"
                      value={email}
                      onChangeText={setEmail}
                      keyboardType="email-address"
                      autoCapitalize="none"
                    />
                    {errorEmail ? <Text style={styles.errorText}>{errorEmail}</Text> : null}
                  </View>
                  <View style={{ flex: 1 }}>
                    <TextInput
                      style={styles.inputFlex1}
                      placeholder="@gmail.com"
                      value={emailDomain}
                      onChangeText={setEmailDomain}
                      autoCapitalize="none"
                    />
                    {errorEmailDomain ? <Text style={styles.errorText}>{errorEmailDomain}</Text> : null}
                  </View>
                </View>

                <TextInput
                  style={styles.input}
                  placeholder="Senha"
                  secureTextEntry
                  value={senha}
                  onChangeText={setSenha}
                />
                {errorSenha ? <Text style={styles.errorText}>{errorSenha}</Text> : null}

                <TextInput
                  style={styles.input}
                  placeholder="CNPJ"
                  value={cnpj}
                  onChangeText={setCnpj}
                  keyboardType="number-pad"
                />
                {errorCnpj ? <Text style={styles.errorText}>{errorCnpj}</Text> : null}

                <TextInput
                  style={styles.input}
                  placeholder="Telefone"
                  keyboardType="phone-pad"
                  value={telefone}
                  onChangeText={setTelefone}
                />
                {errorTelefone ? <Text style={styles.errorText}>{errorTelefone}</Text> : null}

                <View style={styles.row}>
                  <View style={{ flex: 2 }}>
                    <TextInput
                      style={styles.inputFlex2}
                      placeholder="Nome do Representante"
                      value={nomeRepresentante}
                      onChangeText={setNomeRepresentante}
                    />
                    {errorNomeRepresentante ? <Text style={styles.errorText}>{errorNomeRepresentante}</Text> : null}
                  </View>
                  <View style={{ flex: 1 }}>
                    <TextInput
                      style={styles.inputFlex1}
                      placeholder="Cargo"
                      value={cargo}
                      onChangeText={setCargo}
                    />
                    {errorCargo ? <Text style={styles.errorText}>{errorCargo}</Text> : null}
                  </View>
                </View>

                <TextInput
                  style={[styles.input, { height: 80 }]}
                  placeholder="Área de Atuação"
                  multiline
                  value={areaAtuacao}
                  onChangeText={setAreaAtuacao}
                />
                {errorAreaAtuacao ? <Text style={styles.errorText}>{errorAreaAtuacao}</Text> : null}

                <TextInput
                  style={[styles.input, { height: 100 }]}
                  placeholder="Mensagem"
                  multiline
                  value={mensagem}
                  onChangeText={setMensagem}
                />
                {errorMensagem ? <Text style={styles.errorText}>{errorMensagem}</Text> : null}

                <TouchableOpacity style={styles.botao} onPress={handleCadastrar}>
                  <Text style={styles.botaoTexto}>Cadastrar</Text>
                </TouchableOpacity>
              </View>
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
        </KeyboardAvoidingView>

        {/* Toast precisa estar no topo do componente para funcionar */}
        <Toast config={toastConfig} />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#E5E5E5" },
  scrollContainer: { paddingBottom: 20, alignItems: 'center' },
  content: { width: '100%', alignItems: 'center' },
  titulo: { fontSize: 24, fontWeight: "bold", color: "#357447", marginVertical: 20, textAlign: "center" },
  card: { width: "90%", backgroundColor: "white", padding: 20, borderRadius: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 5, elevation: 5 },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10, marginVertical: 8, backgroundColor: '#fff' },
  inputFlex2: { flex: 2, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10, marginVertical: 8, marginRight: 5, backgroundColor: '#fff'},
  inputFlex1: { flex: 1, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10, marginVertical: 8, backgroundColor: '#fff', width: 101 },
  row: { flexDirection: "row", justifyContent: "space-between" },
  botao: { backgroundColor: "#357447", padding: 15, borderRadius: 8, marginTop: 15, alignItems: "center" },
  botaoTexto: { color: "white", fontWeight: "bold" },
  botaoVoltar: { alignSelf: 'flex-start', marginLeft: 20, marginBottom: 10, marginTop: 20, backgroundColor: '#357447', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 6 },
  textoVoltar: { color: '#fff', fontWeight: 'bold' },
  footer: { width: '100%', backgroundColor: '#357447', alignItems: 'center', paddingVertical: 25, marginTop: 70 },
  footerTitle: { fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 5 },
  footerText: { color: 'white', textAlign: 'center', marginVertical: 5, lineHeight: 20 },
  subscribe: { marginTop: 10, alignItems: 'center', width: '90%' },
  subscribeTitle: { fontSize: 16, fontWeight: 'bold', color: 'white' },
  subscribeText: { textAlign: 'center', marginVertical: 10, color: 'white', lineHeight: 20 },
  inputGroup: { flexDirection: 'row', width: '70%', alignItems: 'center' },
  inputSugestao: { backgroundColor: 'transparent', borderWidth: 1, borderColor: 'white', padding: 10, borderRadius: 5, flex: 1, marginRight: 5, marginTop:15, marginBottom:15, height: 41, color: 'white' },
  inputButton: { backgroundColor: '#255736', paddingHorizontal: 15, justifyContent: 'center', borderRadius: 5, height: 41 },
  inputButtonText: { color: 'white', fontWeight: 'bold' },
  socialContainer: { flexDirection: 'row', marginTop: 10, justifyContent: 'center' },
  socialIcon: { width: 35, height: 35, marginHorizontal: 10 },
  errorText: { color: 'red', marginBottom: 8, fontSize: 12 },
  footerCopyright: { color: 'white', fontSize: 12, textAlign: 'center', marginTop: 10, fontWeight: 'bold' },
  backgroundImage: { flex: 1, width: '100%', height: '100%' },
});
