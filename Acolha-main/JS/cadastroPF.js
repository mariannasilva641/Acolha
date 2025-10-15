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

  const handleCadastrar = () => {
    console.log({ nome, email, senha, cpf, telefone, nacionalidade, dataNascimento });
  };

  return (
    <ImageBackground
      source={require('../IMG/FundoCadastro.jpeg')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Botão de Voltar */}
        <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate('home')}>
          <Text style={styles.textoVoltar}>← Voltar à Página Inicial</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>Cadastro - Pessoa Física</Text>

        <View style={styles.card}>
          <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
          <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
          <TextInput style={styles.input} placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry />
          <TextInput style={styles.input} placeholder="CPF" value={cpf} onChangeText={setCpf} keyboardType="numeric" />
          <TextInput style={styles.input} placeholder="Telefone" value={telefone} onChangeText={setTelefone} keyboardType="phone-pad" />
          <TextInput style={styles.input} placeholder="Nacionalidade" value={nacionalidade} onChangeText={setNacionalidade} />
          <TextInput style={styles.input} placeholder="Data de Nascimento" value={dataNascimento} onChangeText={setDataNascimento} />

          <TouchableOpacity style={styles.botao} onPress={handleCadastrar}>
            <Text style={styles.botaoTexto}>Cadastrar</Text>
          </TouchableOpacity>
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
  container: { alignItems: 'center', paddingVertical: 20 },
  botaoVoltar: { alignSelf: 'flex-start', marginLeft: 20, marginBottom: 30, backgroundColor: '#357447', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 6 },
  textoVoltar: { color: '#fff', fontWeight: 'bold' },
  titulo: { fontSize: 24, fontWeight: 'bold', color: '#357447', textAlign: 'center', marginBottom: 20 },
  card: { width: '90%', backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 8, padding: 20, shadowColor: '#000', shadowOpacity: 0.2, shadowOffset: { width: 0, height: 4 }, shadowRadius: 4, marginBottom: 70 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 10, marginVertical: 5, backgroundColor: '#fff' },
  botao: { backgroundColor: '#357447', padding: 15, borderRadius: 6, marginTop: 10, alignItems: 'center' },
  botaoTexto: { color: '#fff', fontWeight: 'bold' },

  /* Footer */
  footer: { alignItems: 'center', paddingVertical: 25, backgroundColor: '#357447', width: '100%',height:'36%' },
  footerTitle: { fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 5 },
  footerText: { color: 'white', textAlign: 'center', marginVertical: 5, lineHeight: 20 },
  subscribe: { marginTop: 10, alignItems: 'center', width: '90%' },
  subscribeTitle: { fontSize: 16, fontWeight: 'bold', color: 'white' },
  subscribeText: { textAlign: 'center', marginVertical: 10, color: 'white', lineHeight: 20 },
  inputGroup: { flexDirection: 'row', width: '90%', alignItems: 'center' },
  inputSugestao: { backgroundColor: 'transparent', borderWidth: 1, borderColor: 'white', padding: 10, borderRadius: 5, flex: 1, marginRight: 5, height: 41, color: 'white' },
  inputButton: { backgroundColor: '#255736', paddingHorizontal: 15, justifyContent: 'center', borderRadius: 5, height: 41 },
  inputButtonText: { color: 'white', fontWeight: 'bold' },
  socialContainer: { flexDirection: 'row', marginTop: 10, justifyContent: 'center' },
  socialIcon: { width: 35, height: 35, marginHorizontal: 10 },
  footerCopyright: { color: 'white', fontSize: 12, textAlign: 'center', marginTop: 10 },
});
