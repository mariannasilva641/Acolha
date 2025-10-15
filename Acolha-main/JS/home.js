import React, { useState } from 'react';
import { 
  View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, 
  Linking, FlatList, Dimensions, ImageBackground 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const [menuAberto, setMenuAberto] = useState(false);

  const equipe = [
    { nome: 'David Wendel', funcao: 'Administrador', foto: require('../IMG/Atlas.png') },
    { nome: 'Heloisa Maria', funcao: 'Produtora Midiática', foto: require('../IMG/Atlas.png') },
    { nome: 'Lorayne Yasmin', funcao: 'Pesquisadora de Inclusão Social', foto: require('../IMG/Atlas.png') },
    { nome: 'Marianna Silva', funcao: 'Gestora de Logística & Programadora Front-End', foto: require('../IMG/Atlas.png') },
    { nome: 'Matheus Gabriel', funcao: 'Supervisor & Programador Front-End', foto: require('../IMG/Atlas.png') },
    { nome: 'Nicolas Vieira', funcao: 'Desenvolvedor Back-End', foto: require('../IMG/Atlas.png') },
    { nome: 'Paulo Diaz', funcao: 'Pesquisador Legislativo', foto: require('../IMG/Atlas.png') },
    { nome: 'Pedro Nogueira', funcao: 'Arquivista e Técnico de Documentação', foto: require('../IMG/Atlas.png') },
    { nome: 'Vinícius Novaes', funcao: 'Produtor Midiático', foto: require('../IMG/Atlas.png') },
    { nome: 'Yasmyn Araujo', funcao: 'Produtora Midiática', foto: require('../IMG/Atlas.png') },
  ];

  const toggleMenu = () => setMenuAberto(!menuAberto);

  return (
    <ImageBackground
      source={require('../IMG/FundoAcolha.png')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Navbar */}
        <View style={styles.navbar}>
          <Image source={require('../IMG/LogoAcolhaBranco.png')} style={styles.navbarLogo} />

          {/* Menu Dropdown */}
          <View style={styles.menuContainer}>
            <TouchableOpacity onPress={toggleMenu}>
              <Text style={styles.navLink}>Menu ▼</Text>
            </TouchableOpacity>
            {menuAberto && (
              <View style={styles.dropdownMenu}>
                <TouchableOpacity onPress={() => { setMenuAberto(false); navigation.navigate('projetosSociais'); }}>
                  <Text style={styles.dropdownItem}>Projetos Sociais</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setMenuAberto(false); navigation.navigate('sobreNos'); }}>
                  <Text style={styles.dropdownItem}>Sobre Nós</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          {/* Links fixos */}
          <View style={styles.fixedLinks}>
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
          <Image source={require('../IMG/tiVerde.webp')} style={styles.cardImage} resizeMode="cover" />
          <Text style={styles.cardTitle}>TI Verde</Text>
          <Text style={styles.cardText}>
            A tecnologia verde busca promover o uso consciente de recursos, integrando inovação e sustentabilidade...
          </Text>
          <TouchableOpacity
            style={styles.cardButton}
            onPress={() => Linking.openURL('https://www.instagram.com/acolha2025/')}
          >
            <Text style={styles.cardButtonText}>Ler Mais</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require('../IMG/Refugiado.jpg')} style={styles.cardImage} resizeMode="cover" />
          <Text style={styles.cardTitle}>História dos Imigrantes</Text>
          <Text style={styles.cardText}>
            Entenda como os movimentos migratórios moldaram a diversidade cultural e social do Brasil e do mundo...
          </Text>
          <TouchableOpacity
            style={styles.cardButton}
            onPress={() => Linking.openURL('https://www.acnur.org/')}
          >
            <Text style={styles.cardButtonText}>Ler Mais</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require('../IMG/Atlas.png')} style={styles.cardImage} resizeMode="cover" />
          <Text style={styles.cardTitle}>Conheça Atlas, o nosso mascote!</Text>
          <Text style={styles.cardText}>
            O falcão-peregrino que simboliza coragem e proteção, refletindo a força e a esperança de nosso projeto.
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

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>Acolha</Text>
          <Text style={styles.footerText}>Acolhendo vidas. Construindo Futuros</Text>
          <Text style={styles.footerInfo}>
            Endereço: R. Igarapé Água Azul, 70 - {'\n'}Conj. Hab. Santa Etelvina II, São Paulo - SP
          </Text>
          <Text style={styles.footerInfo}>Telefone: (11) 1234-5678</Text>

          <View style={styles.socialContainer}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/')}>
              <Image source={require('../IMG/instragam.jpg')} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('mailto:acolha2025@gmail.com.br')}>
              <Image source={require('../IMG/email.png')} style={styles.socialIcon} />
            </TouchableOpacity>
          </View>

          <Text style={styles.footerCopyright}>
            © 2025 todos os direitos reservados. {'\n'}
            Acolha é uma marca registrada da Civitas Tech.
          </Text>
        </View>

      </ScrollView>
    </ImageBackground>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  background: { flex: 1, width: '100%', height: '100%' },
  container: { alignItems: 'center', paddingBottom: 20, backgroundColor: 'transparent' },

  navbar: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#357447',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  navbarLogo: { width: 120, height: 40, resizeMode: 'contain', marginBottom: 5 },

  menuContainer: { position: 'relative' },
  fixedLinks: { flexDirection: 'row', alignItems: 'center' },
 navLinks: { flexDirection: 'row', flex: 1, justifyContent: 'flex-end', marginRight: 10 },
  navLink: { color: 'white', marginHorizontal: 10, fontWeight: 'bold', fontSize: 12 },


  dropdownMenu: {
    position: 'absolute',
    top: 25,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    zIndex: 100,
  },
  dropdownItem: { paddingVertical: 4, fontSize: 12, color: 'black' },

  card: {
    width: '70%',
    backgroundColor: '#357447',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginTop: 60,
    alignItems: 'center',
    elevation: 4,
  },
  cardImage: { width: '100%', height: 190, borderRadius: 12, marginBottom: 12 },
  cardTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 6, color: 'white', textAlign: 'center' },
  cardText: { textAlign: 'justify', marginBottom: 12, color: '#e9f6eb', lineHeight: 20 },
  cardButton: {
    backgroundColor: '#2d5a36',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginTop: 5,
  },
  cardButtonText: { color: 'white', fontWeight: 'bold', fontSize: 14 },

  equipeContainer: { marginTop: 20, width: '100%', paddingLeft: 10 },
  equipeTitulo: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginTop: 10, color: '#357447', textAlign: 'center' },
  equipeCard: {
    width: 220,
    backgroundColor: '#79c77c',
    borderRadius: 10,
    padding: 15,
    marginRight: 10,
    alignItems: 'center',
  },
  equipeFoto: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  equipeNome: { fontWeight: 'bold', fontSize: 16, marginBottom: 5, textAlign: 'center' },
  equipeFuncao: { fontSize: 14, color: '#555', textAlign: 'center' },

  footer: { alignItems: 'center', paddingVertical: 20, backgroundColor: '#2d5a36', width: '100%', marginTop: 40 },
  footerTitle: { fontSize: 18, fontWeight: 'bold', color: 'white' },
  footerText: { textAlign: 'center', marginVertical: 5, color: 'white' },
  footerInfo: { textAlign: 'center', color: 'white', marginVertical: 2 },
  socialContainer: { flexDirection: 'row', marginTop: 10 },
  socialIcon: { width: 30, height: 30, marginHorizontal: 8 },
  footerCopyright: { color: '#ccc', fontSize: 12, textAlign: 'center', marginTop: 10 },
});
