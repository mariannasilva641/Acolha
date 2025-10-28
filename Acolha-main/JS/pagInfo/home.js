import React, { useState, useRef, useEffect } from 'react';
import { 
  View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, 
  Linking, FlatList, ImageBackground, Animated, Easing
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const [menuAberto, setMenuAberto] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null); // estado do hover

  // Animação do menu
  const menuAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(menuAnim, {
      toValue: menuAberto ? 1 : 0,
      duration: 200,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [menuAberto]);

  const toggleMenu = () => setMenuAberto(!menuAberto);

  const handleNavigate = (screen) => {
    setMenuAberto(false);
    setTimeout(() => navigation.navigate(screen), 0);
  };

  // Estilo da animação do menu
  const menuStyle = {
    opacity: menuAnim,
    transform: [
      {
        translateY: menuAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [-10, 0],
        }),
      },
    ],
  };

  const equipe = [
    { nome: 'David Wendel', funcao: 'Administrador', foto: require('../../IMG/Atlas.png') },
    { nome: 'Heloisa Maria', funcao: 'Produtora Midiática', foto: require('../../IMG/Atlas.png') },
    { nome: 'Lorayne Yasmin', funcao: 'Pesquisadora de Inclusão Social', foto: require('../../IMG/Atlas.png') },
    { nome: 'Marianna Silva', funcao: 'Gestora de Logística & Programadora Front-End', foto: require('../../IMG/Atlas.png') },
    { nome: 'Matheus Gabriel', funcao: 'Supervisor & Programador Front-End', foto: require('../../IMG/Atlas.png') },
    { nome: 'Nicolas Vieira', funcao: 'Desenvolvedor Back-End', foto: require('../../IMG/Atlas.png') },
    { nome: 'Paulo Diaz', funcao: 'Pesquisador Legislativo', foto: require('../../IMG/Atlas.png') },
    { nome: 'Pedro Nogueira', funcao: 'Arquivista e Técnico de Documentação', foto: require('../../IMG/Atlas.png') },
    { nome: 'Vinícius Novaes', funcao: 'Produtor Midiático', foto: require('../../IMG/Atlas.png') },
    { nome: 'Yasmyn Araujo', funcao: 'Produtora Midiática', foto: require('../../IMG/Atlas.png') },
  ];

  return (
    <ImageBackground
      source={require('../../IMG/FundoAcolha.png')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator>
        
        {/* Navbar */}
        <View style={styles.navbar}>
          <Image source={require('../../IMG/LogoAcolhaBranco.png')} style={styles.navbarLogo} />
          <View style={styles.navbarLinks}>
            <TouchableOpacity onPress={() => handleNavigate('ajuda')}>
              <Text style={styles.navLink}>Ajuda</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigate('Login')}>
              <Text style={styles.navLink}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.menuContainer}>
            <TouchableOpacity onPress={toggleMenu}>
              <Image source={require('../../IMG/menu.png')} style={{ width: 24, height: 24, marginRight: 20 }} resizeMode="contain" />
            </TouchableOpacity>

            <Animated.View style={[styles.dropdownMenu, menuStyle, { display: menuAberto ? 'flex' : 'none' }]}>
              <TouchableOpacity onPress={() => handleNavigate('projetosSociais')}>
                <Text style={styles.dropdownItem}>📌 Projetos Sociais</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleNavigate('sobreNos')}>
                <Text style={styles.dropdownItem}>ℹ️ Sobre Nós</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>

        {/* Cards */}
        {[ 
          { id: 1, img: require('../../IMG/tiVerde.webp'), title: 'TI Verde', text: 'A tecnologia verde busca promover o uso consciente de recursos, integrando inovação e sustentabilidade...', route: 'tiVerde' },
          { id: 2, img: require('../../IMG/Refugiado.jpg'), title: 'História dos Imigrantes', text: 'Entenda como os movimentos migratórios moldaram a diversidade cultural e social do Brasil e do mundo...', route: 'historiaImigrantes' },
          { id: 3, img: require('../../IMG/Atlas.png'), title: 'Conheça Atlas, o nosso mascote!', text: 'O falcão-peregrino que simboliza coragem e proteção, refletindo a força e a esperança de nosso projeto.', route: 'historiaAtlas' },
        ].map((card) => (
          <Animated.View
            key={card.id}
            style={[
              styles.card,
              hoveredCard === card.id && styles.cardHover,
            ]}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <View style={styles.cardOverlay} />
            <Image source={card.img} style={styles.cardImage} resizeMode="cover" />
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Text style={styles.cardText}>{card.text}</Text>
            <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate(card.route)}>
              <Text style={styles.cardButtonText}>Ler Mais</Text>
            </TouchableOpacity>
          </Animated.View>
        ))}

        {/* Equipe */}
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
              <Image source={require('../../IMG/instragam.png')} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('mailto:acolha2025@gmail.com.br')}>
              <Image source={require('../../IMG/email.png')} style={styles.socialIcon} />
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

// 🟩 ESTILOS
const styles = StyleSheet.create({
  background: { flex: 1, width: '100%', height: '100%' },
  container: { alignItems: 'center', backgroundColor: 'transparent', width: '100%' },

  navbar: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#357447',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    zIndex: 10,
  },
  navbarLogo: { width: 120, height: 40, resizeMode: 'contain', marginBottom: 5 },
  menuContainer: { position: 'relative' },
  navbarLinks: { flexDirection: 'row', alignItems: 'center', gap: 15 },
  navLink: { color: 'white', fontWeight: 'bold', fontSize: 12, fontFamily: 'Questrial-Regular' },
  dropdownMenu: {
    position: 'absolute',
    top: 25,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    zIndex: 1000,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  dropdownItem: { paddingVertical: 6, fontSize: 14, fontFamily: 'Questrial-Regular', color: '#357447', fontWeight: '600', width: 125 },

  card: {
    width: '70%',
    backgroundColor: '#357447',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginTop: 60,
    alignItems: 'center',
    elevation: 4,
    overflow: 'hidden',
    transition: 'all 0.4s ease',
  },

  cardHover: {
    transform: [{ translateX: 10 }], // desliza para o lado
    backgroundColor: '#3e8e54',
    shadowColor: '#2b6a3c',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },

  cardImage: { width: '100%', height: 190, borderRadius: 12, marginBottom: 12 },
  cardTitle: { fontSize: 20, fontFamily: 'Questrial-Regular', fontWeight: 'bold', marginBottom: 6, color: 'white', textAlign: 'center' },
  cardText: { fontFamily: 'Questrial-Regular', textAlign: 'justify', marginBottom: 12, color: '#e9f6eb', lineHeight: 20 },
  cardButton: {
    backgroundColor: '#2d5a36',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginTop: 5,
  },
  cardButtonText: { color: 'white', fontWeight: 'bold', fontSize: 14, fontFamily: 'Questrial-Regular' },

  equipeContainer: { marginTop: 20, width: '100%', paddingLeft: 10 },
  equipeTitulo: { backgroundColor: '#fff', fontFamily: 'Questrial-Regular', fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginTop: 10, color: '#357447', textAlign: 'center' },
  equipeCard: {
    width: 220,
    backgroundColor: '#2d5a36',
    borderRadius: 10,
    padding: 15,
    marginRight: 10,
    alignItems: 'center',
  },
  equipeFoto: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  equipeNome: { fontFamily: 'Questrial-Regular', fontWeight: '720', fontSize: 16, marginBottom: 5, textAlign: 'center', color: 'white' },
  equipeFuncao: { fontFamily: 'Questrial-Regular', fontSize: 14, color: '#fff', textAlign: 'center' },

  footer: { alignItems: 'center', paddingVertical: 20, backgroundColor: '#2d5a36', width: '100%', marginTop: 40 },
  footerTitle: {  marginTop:20,marginBottom:10,fontFamily: 'Questrial-Regular', fontSize: 18, fontWeight: 'bold', color: 'white' },
  footerText: { fontFamily: 'Questrial-Regular', textAlign: 'center', marginVertical: 5, color: 'white' },
  footerInfo: { textAlign: 'center', color: 'white', marginVertical: 2 },
  socialContainer: { flexDirection: 'row', marginTop: 2 },
  socialIcon: { width: 50, height: 50, marginHorizontal: 0.2 },
  footerCopyright: { fontFamily: 'Questrial-Regular', color: '#ccc', fontSize: 12, textAlign: 'center', marginTop: 5, fontWeight: 'bold' },
});
