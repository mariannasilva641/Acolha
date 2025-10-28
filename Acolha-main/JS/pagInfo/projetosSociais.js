import React, { useState, useRef, useEffect } from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity, TextInput, ImageBackground, Linking, Animated, Easing, Platform} from 'react-native';
import styles from "../estilo/estiloPagInfo/estiloProjetosSociais.js";
import { useNavigation } from '@react-navigation/native';

export default function ProjetosSociais() {
  const navigation = useNavigation();
  const [menuAberto, setMenuAberto] = useState(false);

  // Animação do dropdown
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

  const novosCards = [
    {
      titulo: 'Instituto Adus',
      descricao: 'Atuamos em parceria com solicitantes de refúgio, refugiados e outras pessoas em situação de deslocamento forçado.',
      imagem: require('../../IMG/adus.jpeg'),
      link: 'https://adus.org.br/',
    },
    {
      titulo: 'Cidades Invisíveis',
      descricao: 'Atua desde 2012 promovendo inclusão social, acesso ao conhecimento, tecnologia, saúde...',
      imagem: require('../../IMG/cidadesInvisiveis.webp'),
      link: 'https://cidadesinvisiveis.com.br/',
    },
    {
      titulo: 'Missão Paz',
      descricao: 'Instituição filantrópica que apoia e acolhe imigrantes e refugiados em São Paulo desde os anos 1930...',
      imagem: require('../../IMG/missaoPaz.jpg'),
      link: 'https://missaonspaz.org/quem-somos/',
    },
    {
      titulo: 'CAMI - Centro de Apoio Pastoral do Migrante',
      descricao: 'Organização sem fins lucrativos que promove inclusão social, econômica, política e cultural de imigrantes e refugiados...',
      imagem: require('../../IMG/cami.png'),
      link: 'https://www.cami.org.br/',
    },
  ];

  return (
    <ImageBackground
      source={require('../../IMG/FundoAcolha.png')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Navbar */}
        <View style={styles.navbar}>
          <Image source={require('../../IMG/LogoAcolhaBranco.png')} style={styles.navbarLogo} />
          <View style={styles.fixedLinks}>
            <TouchableOpacity onPress={() => handleNavigate('ajuda')}><Text style={styles.navLink}>Ajuda</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigate('Login')}><Text style={styles.navLink}>Login</Text></TouchableOpacity>
          </View>

          <View style={styles.menuContainer}>
            <TouchableOpacity onPress={toggleMenu}>
              <Image source={require('../../IMG/menu.png')} style={{ width: 24, height: 24, marginRight: 20 }} resizeMode="contain"/>
            </TouchableOpacity>
            <Animated.View style={[styles.dropdownMenu, menuStyle, { display: menuAberto ? 'flex' : 'none' }]}>
              <TouchableOpacity onPress={() => handleNavigate('home')}><Text style={styles.dropdownItem}>🏠 Home</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => handleNavigate('sobreNos')}><Text style={styles.dropdownItem}>ℹ️ Sobre Nós</Text></TouchableOpacity>
            </Animated.View>
          </View>
        </View>

        {/* Cards com hover animado (somente Web) */}
        {novosCards.map((card, index) => {
          const slideAnim = useRef(new Animated.Value(0)).current;

          const handleMouseEnter = () => {
            if (Platform.OS === 'web') {
              Animated.timing(slideAnim, {
                toValue: 10,
                duration: 200,
                useNativeDriver: true,
              }).start();
            }
          };

          const handleMouseLeave = () => {
            if (Platform.OS === 'web') {
              Animated.timing(slideAnim, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
              }).start();
            }
          };

          return (
            <Animated.View
              key={index}
              style={[styles.card, { transform: [{ translateX: slideAnim }] }]}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Image source={card.imagem} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{card.titulo}</Text>
              <Text style={styles.cardText}>{card.descricao}</Text>
              <TouchableOpacity style={styles.cardButton} onPress={() => Linking.openURL(card.link)}>
                <Text style={styles.cardButtonText}>Ler Mais</Text>
              </TouchableOpacity>
            </Animated.View>
          );
        })}

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>Acolha</Text>
          <Text style={styles.footerText}>Acolhendo vidas. Construindo Futuros</Text>

          <View style={styles.subscribe}>
            <Text style={styles.subscribeTitle}>Sugestões</Text>
            <Text style={styles.subscribeText}>
              Envie aqui suas sugestões, dúvidas ou críticas.{"\n"}Sua opinião é muito importante para nós!
            </Text>
            <View style={styles.inputGroup}>
              <TextInput placeholder="Sua Sugestão" placeholderTextColor="white" style={styles.input} multiline numberOfLines={4} textAlignVertical="top"/>
              <TouchableOpacity style={styles.inputButton}><Text style={styles.inputButtonText}>➤</Text></TouchableOpacity>
            </View>
          </View>

          <View style={styles.socialContainer}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/')}><Image source={require('../../IMG/instragam.png')} style={styles.socialIcon} /></TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('mailto:contato@acolha.com')}><Image source={require('../../IMG/email.png')} style={styles.socialIcon} /></TouchableOpacity>
          </View>

          <Text style={styles.footerCopyright}>
            © 2025 todos os direitos reservados.{"\n"}Acolha é uma marca registrada da Civitas Tech.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
