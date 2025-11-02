import React, { useState, useRef, useEffect } from 'react';
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity,Linking, FlatList, ImageBackground, Animated, Easing} from 'react-native';
import styles from "../estilo/estiloPagInfo/estiloHome.js";
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
    { nome: 'David Wendel', funcao: 'Administrador', foto: require('../../IMG/Wendel.jpeg') },
    { nome: 'Heloisa Maria', funcao: 'Produtora Midiática', foto: require('../../IMG/Heloisa.jpeg') },
    { nome: 'Lorayne Yasmin', funcao: 'Pesquisadora de Inclusão Social', foto: require('../../IMG/Lorayne.jpeg') },
    { nome: 'Marianna Silva', funcao: 'Gestora de Logística & Programadora Front-End', foto: require('../../IMG/Marianna.jpeg') },
    { nome: 'Matheus Gabriel', funcao: 'Supervisor & Programador Front-End', foto: require('../../IMG/Matheus.jpeg') },
    { nome: 'Nicolas Vieira', funcao: 'Desenvolvedor Back-End', foto: require('../../IMG/Nicolas.jpeg') },
    { nome: 'Paulo Diaz', funcao: 'Pesquisador Legislativo', foto: require('../../IMG/Paulo.jpeg') },
    { nome: 'Pedro Nogueira', funcao: 'Arquivista e Técnico de Documentação', foto: require('../../IMG/Pedro.jpeg') },
    { nome: 'Vinícius Novaes', funcao: 'Produtor Midiático', foto: require('../../IMG/Vinicius.jpeg') },
    { nome: 'Yasmyn Araujo', funcao: 'Produtora Midiática', foto: require('../../IMG/Yasmyn.jpeg') },
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

