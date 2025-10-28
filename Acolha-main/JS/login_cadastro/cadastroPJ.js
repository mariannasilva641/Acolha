import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, Linking, SafeAreaView, KeyboardAvoidingView, Platform, ImageBackground, Dimensions} from "react-native";
import styles from "../estilo/estiloLoginCadastro/estiloCadastroPJ.js";
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { toastConfig } from '../../App.js';


export default function CadastroPJ() {
  const navigation = useNavigation();

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
  const [sugestao, setSugestao] = useState('');

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
      <ImageBackground source={require('../../IMG/FundoCadastro.jpeg')} style={styles.backgroundImage}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        >
          <ScrollView
            contentContainerStyle={styles.contentWrapper}
            bounces={false}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.titulo}>Cadastro - Pessoa Jurídica</Text>

            <View style={styles.card}>
              {/* Nome */}
              <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
              {errorNome ? <Text style={styles.errorText}>{errorNome}</Text> : null}

              {/* Email e Domain */}
              <View style={styles.row}>
                <TextInput
                  style={[styles.input, styles.inputRow]}
                  placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <TextInput
                  style={[styles.input, { flex: 1, marginRight: 0 }]}
                  placeholder="@gmail.com"
                  value={emailDomain}
                  onChangeText={setEmailDomain}
                  autoCapitalize="none"
                />
              </View>
              {errorEmail || errorEmailDomain ? <Text style={styles.errorText}>{errorEmail || errorEmailDomain}</Text> : null}

              {/* Senha */}
              <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
              />
              {errorSenha ? <Text style={styles.errorText}>{errorSenha}</Text> : null}

              {/* CNPJ */}
              <TextInput
                style={styles.input}
                placeholder="CNPJ"
                value={cnpj}
                onChangeText={setCnpj}
                keyboardType="number-pad"
              />
              {errorCnpj ? <Text style={styles.errorText}>{errorCnpj}</Text> : null}

              {/* Telefone */}
              <TextInput
                style={styles.input}
                placeholder="Telefone"
                keyboardType="phone-pad"
                value={telefone}
                onChangeText={setTelefone}
              />
              {errorTelefone ? <Text style={styles.errorText}>{errorTelefone}</Text> : null}

              {/* Nome do Representante e Cargo */}
              <View style={styles.row}>
                <TextInput
                  style={[styles.input, styles.inputRow]}
                  placeholder="Nome do Representante"
                  value={nomeRepresentante}
                  onChangeText={setNomeRepresentante}
                />
                <TextInput
                  style={[styles.input, { flex: 1, marginRight: 0 }]}
                  placeholder="Cargo"
                  value={cargo}
                  onChangeText={setCargo}
                />
              </View>
              {errorNomeRepresentante || errorCargo ? <Text style={styles.errorText}>{errorNomeRepresentante || errorCargo}</Text> : null}

              {/* Área de Atuação */}
              <TextInput
                style={[styles.input, { height: 80 }]}
                placeholder="Área de Atuação"
                multiline
                value={areaAtuacao}
                onChangeText={setAreaAtuacao}
              />
              {errorAreaAtuacao ? <Text style={styles.errorText}>{errorAreaAtuacao}</Text> : null}

              {/* Mensagem */}
              <TextInput
                style={[styles.input, { height: 100 }]}
                placeholder="Mensagem"
                multiline
                value={mensagem}
                onChangeText={setMensagem}
              />
              {errorMensagem ? <Text style={styles.errorText}>{errorMensagem}</Text> : null}

              {/* Botões */}
              <TouchableOpacity style={styles.botao} onPress={handleCadastrar}>
                <Text style={styles.botaoTexto}>Cadastrar</Text>
              </TouchableOpacity>

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
                          <Image source={require('../../IMG/instragam.png')} style={styles.socialIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('mailto:contato@acolha.com')}>
                          <Image source={require('../../IMG/email.png')} style={styles.socialIcon} />
                        </TouchableOpacity>
                      </View>
        
                      <Text style={styles.footerCopyright}>
                        © 2025 todos os direitos reservados.{"\n"}Acolha é uma marca registrada da Civitas Tech.
                      </Text>
                    </View>

          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
      <Toast config={toastConfig} />
    </SafeAreaView>
  );
}

 