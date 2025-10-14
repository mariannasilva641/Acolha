import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking, FlatList, Dimensions, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  const equipe = [
    { nome: 'David Wendel', funcao: 'Administrador', foto: require('../IMG/Atlas.png') },
    { nome: 'Heloisa Maria', funcao: 'Produtora Midiatica', foto: require('../IMG/Atlas.png') },
    { nome: 'Lorayne Yasmin ', funcao: 'Pesquisadora de Inclusão Social', foto: require('../IMG/Atlas.png') },
    { nome: 'Marianna Silva', funcao: 'Gestora de Logística & Programadora Front-End', foto: require('../IMG/Atlas.png') },
    { nome: 'Matheus Gabriel', funcao: 'Supervisor & Programadora Front-End', foto: require('../IMG/Atlas.png') },
    { nome: 'Nicolas Vieira', funcao: 'Desenvolvedor BackEnd', foto: require('../IMG/Atlas.png') },
    { nome: 'Paulo Diaz', funcao: 'Pesquisador Legislativo', foto: require('../IMG/Atlas.png') },
    { nome: 'Pedro Nogueira', funcao: 'Arquivista e Técnico de Documentação', foto: require('../IMG/Atlas.png') },
    { nome: 'Vinícius Novaes ', funcao: 'Produtor Midiatico', foto: require('../IMG/Atlas.png') },
    { nome: 'Yasmyn Araujo', funcao: 'Produtora Midiática', foto: require('../IMG/Atlas.png') },
  ];

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
            <TouchableOpacity onPress={() => navigation.navigate('projetosSociais')}>
              <Text style={styles.navLink}>Projetos Sociais</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ajuda')}>
              <Text style={styles.navLink}>Ajuda</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.navLink}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Cards de conteúdo */}
        <View style={styles.card}>
          <Image source={require('../IMG/tiVerde.webp')} style={styles.cardImage} />
          <Text style={styles.cardTitle}>TI Verde</Text>
          <Text style={styles.cardText}>
            Destarte, é necessário compreender os conceitos que englobam a sustentabilidade ambiental...
          </Text>
          <TouchableOpacity
            style={styles.cardButton}
            onPress={() => Linking.openURL('https://www.instagram.com/acolha2025/')}
          >
            <Text style={styles.cardButtonText}>Ler Mais</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require('../IMG/Refugiado.jpg')} style={styles.cardImage} />
          <Text style={styles.cardTitle}>História dos Imigrantes</Text>
          <Text style={styles.cardText}>
            O fenômeno migratório constitui uma das questões mais complexas e urgentes do século XXI...
          </Text>
          <TouchableOpacity
            style={styles.cardButton}
            onPress={() => Linking.openURL('https://www.instagram.com/acolha2025/')}
          >
            <Text style={styles.cardButtonText}>Ler Mais</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require('../IMG/Atlas.png')} style={styles.cardImage} />
          <Text style={styles.cardTitle}>Conheça Atlas, o nosso mascote!</Text>
          <Text style={styles.cardText}>
            Atlas, cujo nome verdadeiro é Wendell Atlas Pelegrine, nasceu como um falcão-peregrino...
          </Text>
          <TouchableOpacity
            style={styles.cardButton}
            onPress={() => Linking.openURL('https://www.instagram.com/acolha2025/')}
          >
            <Text style={styles.cardButtonText}>Ler Mais</Text>
          </TouchableOpacity>
        </View>

        {/* Carrossel da equipe */}
        <View style={styles.equipeContainer}>
          <Text style={styles.equipeTitulo}>Nossa Equipe</Text>
          <FlatList
            horizontal
            data={equipe}
            keyExtractor={(item) => item.nome}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.equipeCard}>
                <Image source={item.foto} style={styles.equipeFoto} />
                <Text style={styles.equipeNome}>{item.nome}</Text>
                <Text style={styles.equipeFuncao}>{item.funcao}</Text>
              </View>
            )}
          />
        </View>

        <View style={{ height: 30 }} />

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>Acolha</Text>
          <Text style={styles.footerText}>Acolhendo vidas. Construindo Futuros</Text>
          <Text style={styles.footerInfo}>Endereço: R. Igarapé Água Azul, 70 - Conj. Hab. Santa Etelvina II, São Paulo - SP, 08485-310</Text>
          <Text style={styles.footerInfo}>Email: acolha2025@gmail.com.br</Text>
          <Text style={styles.footerInfo}>Telefone: (11) 1234-5678</Text>
          <Text style={styles.footerSocial}>Instagram: @acolha2025 | Facebook: /acolha</Text>
          <Text style={styles.footerCopyright}>
            © 2025 todos os direitos reservados. Acolha é uma marca registrada da Civitas Tech.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: { 
    alignItems: 'center', 
    paddingVertical: 0,
    backgroundColor: 'transparent',
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
    marginVertical: 5, 
    marginTop: 60,
    alignItems: 'center', 
    shadowColor: '#000', 
    shadowOpacity: 0.1, 
    shadowOffset: { width: 0, height: 4 }, 
    shadowRadius: 4 
  },
  cardImage: { width: '100%', height: 190, borderRadius: 10, marginBottom: 10 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 5, color: 'white' },
  cardText: { textAlign: 'justify', marginBottom: 10, color: 'white' },
  cardButton: { borderWidth: 1, borderColor: '#fff', borderRadius: 5, padding: 10 },
  cardButtonText: { color: 'white', fontWeight: 'bold' },

  equipeContainer: { marginTop: 20, width: '100%', paddingLeft: 10 },
  equipeTitulo: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginTop: 10, color: '#357447', textAlign: 'center' },
  equipeCard: { 
    width: width * 0.6, 
    backgroundColor: '#79c77c', 
    borderRadius: 10, 
    padding: 15, 
    marginRight: 10, 
    alignItems: 'center',
  },
  equipeFoto: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  equipeNome: { 
    fontWeight: 'bold', 
    fontSize: 16, 
    marginBottom: 5, 
    textAlign: 'center',
  },
  equipeFuncao: { 
    fontSize: 14, 
    color: '#555', 
    textAlign: 'center',
  },

  footer: { 
    alignItems: 'center', 
    paddingVertical: 20, 
    backgroundColor: '#2d5a36', 
    width: '100%' 
  },
  footerTitle: { fontSize: 18, fontWeight: 'bold', color: 'white' },
  footerText: { textAlign: 'center', marginVertical: 5, color: 'white' },
  footerInfo: { textAlign: 'center', color: 'white', marginVertical: 2 },
  footerSocial: { textAlign: 'center', color: 'white', marginVertical: 2 },
  footerCopyright: { color: '#ccc', fontSize: 12, textAlign: 'center', marginTop: 10 },
});
