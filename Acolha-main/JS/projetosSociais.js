import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../IMG/FundoAcolha.png')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Navbar */}
        <View style={styles.navbar}>
          <Image source={require('../IMG/LogoAcolhaBranco.png')} style={styles.navbarLogo} />
          <View style={styles.navLinks}>
            <TouchableOpacity onPress={() => navigation.navigate('home')}>
              <Text style={styles.navLink}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ajuda')}>
              <Text style={styles.navLink}>Ajuda</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.navLink}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Cards */}
        <View style={styles.card}>
          <Image source={require('../IMG/tiVerde.webp')} style={styles.cardImage} />
          <Text style={styles.cardTitle}>TI Verde</Text>
          <Text style={styles.cardText}>
            Destarte, é necessário compreender os conceitos que englobam a sustentabilidade ambiental...
          </Text>
          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.cardButtonText}>Ler Mais</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require('../IMG/Refugiado.jpg')} style={styles.cardImage} />
          <Text style={styles.cardTitle}>História dos Imigrantes</Text>
          <Text style={styles.cardText}>
            O fenômeno migratório constitui uma das questões mais complexas e urgentes do século XXI...
          </Text>
          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.cardButtonText}>Ler Mais</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require('../IMG/Atlas.png')} style={styles.cardImage} />
          <Text style={styles.cardTitle}>Conheça Atlas, o nosso mascote!</Text>
          <Text style={styles.cardText}>
            Atlas, cujo nome verdadeiro é Wendell Atlas Pelegrine, nasceu como um falcão-peregrino...
          </Text>
          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.cardButtonText}>Ler Mais</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>Acolha</Text>
          <Text style={styles.footerText}>Acolhendo vidas.{"\n"}Construindo Futuros</Text>

          {/* Formulário de sugestões */}
          <View style={styles.subscribe}>
            <Text style={styles.subscribeTitle}>Sugestões</Text>
            <Text style={styles.subscribeText}>
              Envie aqui suas sugestões, dúvidas ou críticas.{"\n"}
              Sua opinião é muito importante para nós!{"\n"}
              Pode escrever quantas linhas quiser.
            </Text>
            <View style={styles.inputGroup}>
              <TextInput
                placeholder="Sua Sugestão"
                style={styles.input}
                multiline={true}
                numberOfLines={4}
                textAlignVertical="top"
              />
              <TouchableOpacity style={styles.inputButton}>
                <Text style={styles.inputButtonText}>➤</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.footerCopyright}>
            © 2025 todos os direitos reservados. Acolha é uma marca registrada da Civitas Tech.
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
    paddingVertical: 0,
  },
  navbar: { 
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 0,
    backgroundColor: '#357447',
    flexDirection: 'row',
    alignItems: 'center',
  },
  navbarLogo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
    marginLeft: 0,
  },
  navLinks: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  navLink: {
    color: 'white',
    marginHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 12,
  },

  card: {
    width: '70%',
    backgroundColor: '#357447',
    borderRadius: 10,
    padding: 15,
    marginVertical: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
  },
  cardImage: { width: '100%', height: 180, borderRadius: 10, marginBottom: 10 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 5, color: 'white' },
  cardText: { textAlign: 'justify', marginBottom: 10, color: 'white' },
  cardButton: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    padding: 10,
  },
  cardButtonText: { color: 'white', fontWeight: 'bold' },

  footer: { alignItems: 'center', paddingVertical: 20, width: '100%', backgroundColor: '#357447' },
  footerTitle: { fontSize: 18, fontWeight: 'bold', color: 'white' },
  footerText: { textAlign: 'center', marginVertical: 5, color: 'white' },

  subscribe: { marginTop: 10, alignItems: 'center', width: '90%' },
  subscribeTitle: { fontSize: 16, fontWeight: 'bold', color: 'white' },
  subscribeText: { textAlign: 'center', marginVertical: 10, color: 'white', lineHeight: 20 },
  inputGroup: { flexDirection: 'row', marginTop: 5, width: '100%' },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    flex: 1,              
    marginRight: 5,
    height: 43,           
  },
  inputButton: {
    backgroundColor: '#255736',
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderRadius: 5,
  },
  inputButtonText: { color: 'white', fontWeight: 'bold' },

  footerCopyright: { color: 'white', fontSize: 12, textAlign: 'center', marginTop: 10 },
});
