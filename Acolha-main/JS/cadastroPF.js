import React, { useState } from 'react';
import { 
  View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, 
  Image, ImageBackground, Linking 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CadastroPF() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nacionalidade, setNacionalidade] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  // Estados de erro
  const [errorNome, setErrorNome] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorSenha, setErrorSenha] = useState('');
  const [errorCpf, setErrorCpf] = useState('');
  const [errorTelefone, setErrorTelefone] = useState('');
  const [errorNacionalidade, setErrorNacionalidade] = useState('');
  const [errorDataNascimento, setErrorDataNascimento] = useState('');

  // Função simples para validar email
  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Função simples para validar CPF (apenas 11 dígitos numéricos)
  function validarCPF(cpf) {
    const cpfLimpo = cpf.replace(/[^\d]+/g, '');
    return cpfLimpo.length === 11;
  }

  function validarFormulario() {
    let valido = true;

    if (nome.trim() === '') {
      setErrorNome('Por favor, preencha o nome.');
      valido = false;
    } else {
      setErrorNome('');
    }

    if (email.trim() === '') {
      setErrorEmail('Por favor, preencha o email.');
      valido = false;
    } else if (!validarEmail(email.trim())) {
      setErrorEmail('Email inválido.');
      valido = false;
    } else {
      setErrorEmail('');
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

    if (cpf.trim() === '') {
      setErrorCpf('Por favor, preencha o CPF.');
      valido = false;
    } else if (!validarCPF(cpf)) {
      setErrorCpf('CPF inválido. Deve ter 11 números.');
      valido = false;
    } else {
      setErrorCpf('');
    }

    if (telefone.trim() === '') {
      setErrorTelefone('Por favor, preencha o telefone.');
      valido = false;
    } else {
      setErrorTelefone('');
    }

    if (nacionalidade.trim() === '') {
      setErrorNacionalidade('Por favor, preencha a nacionalidade.');
      valido = false;
    } else {
      setErrorNacionalidade('');
    }

    if (dataNascimento.trim() === '') {
      setErrorDataNascimento('Por favor, preencha a data de nascimento.');
      valido = false;
    } else {
      setErrorDataNascimento('');
    }

    return valido;
  }

  const handleCadastrar = () => {
    if (validarFormulario()) {
      // Se tudo OK, navega para perfilPF
      navigation.navigate('perfilPF');
    }
  };

  return (
    <ImageBackground
      source={require('../IMG/FundoCadastro.jpeg')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer} 
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View style={styles.content}>
          {/* Botão de Voltar */}
          <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate('home')}>
            <Text style={styles.textoVoltar}>← Voltar à Página Inicial</Text>
          </TouchableOpacity>

          <Text style={styles.titulo}>Cadastro - Pessoa Física</Text>

          <View style={styles.card}>
            <TextInput 
              style={styles.input} 
              placeholder="Nome" 
              value={nome} 
              onChangeText={setNome} 
            />
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
              keyboardType="numeric" 
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
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>Acolha</Text>
          <Text style={styles.footerText}>Acolhendo vidas. Construindo Futuros</Text>

          {/* Sugestões */}
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
              />
              <TouchableOpacity style={styles.inputButton}>
                <Text style={styles.inputButtonText}>➤</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Redes sociais */}
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
  scrollContainer: { flexGrow: 1, justifyContent: 'space-between' },
  content: { flex: 1, alignItems: 'center' },

  botaoVoltar: { alignSelf: 'flex-start', marginLeft: 20, marginBottom: 30, backgroundColor: '#357447', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 6, marginTop: 15 },
  textoVoltar: { color: '#fff', fontWeight: 'bold' },
  titulo: { fontSize: 24, fontWeight: 'bold', color: '#357447', textAlign: 'center', marginBottom: 20 },
  card: { width: '90%', backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 8, padding: 20, shadowColor: '#000', shadowOpacity: 0.2, shadowOffset: { width: 0, height: 4 }, shadowRadius: 4, marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 10, marginVertical: 5, backgroundColor: '#fff' },
  botao: { backgroundColor: '#357447', padding: 15, borderRadius: 6, marginTop: 10, alignItems: 'center' },
  botaoTexto: { color: '#fff', fontWeight: 'bold' },

  footer: { alignItems: 'center', paddingVertical: 25, backgroundColor: '#357447', width: '100%' },
  footerTitle: { fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 5 },
  footerText: { color: 'white', textAlign: 'center', marginVertical: 5, lineHeight: 20 },
  subscribe: { marginTop: 10, alignItems: 'center', width: '90%' },
  subscribeTitle: { fontSize: 16, fontWeight: 'bold', color: 'white' },
  subscribeText: { textAlign: 'center', marginVertical: 10, color: 'white', lineHeight: 20 },
  inputGroup: { flexDirection: 'row', width: '70%', alignItems: 'center' },
  inputSugestao: { backgroundColor: 'transparent', borderWidth: 1, borderColor: 'white', padding: 10, borderRadius: 5, flex: 1, marginRight: 5, height: 41, color: 'white', marginBottom: 15, marginTop: 15 },
  inputButton: { backgroundColor: '#255736', paddingHorizontal: 15, justifyContent: 'center', borderRadius: 5, height: 41 },
  inputButtonText: { color: 'white', fontWeight: 'bold' },
  socialContainer: { flexDirection: 'row', marginTop: 10, justifyContent: 'center' },
  socialIcon: { width: 35, height: 35, marginHorizontal: 10 },

  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 5,
    marginLeft: 5,
  },

  footerCopyright: { color: 'white', fontSize: 12, textAlign: 'center', marginTop: 10 },
});
