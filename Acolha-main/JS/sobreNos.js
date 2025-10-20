import React, { useState, useRef, useEffect } from 'react';
import {
  View, Text, Image, StyleSheet, ScrollView, TouchableOpacity,
  TextInput, ImageBackground, Linking, Animated, Easing
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SobreNos() {
  const navigation = useNavigation();
  const [menuAberto, setMenuAberto] = useState(false);

  // 🎭 Animação do dropdown
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

  // ⏳ Fechar menu antes de navegar
  const handleNavigate = (screen) => {
    setMenuAberto(false);
    setTimeout(() => navigation.navigate(screen), 0);
  };

  // Estilos animados
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

  return (
    <ImageBackground
      source={require('../IMG/FundoAcolha.png')}
      style={styles.background}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        bounces={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* 🌿 Navbar */}
        <View style={styles.navbar}>
          <Image source={require('../IMG/LogoAcolhaBranco.png')} style={styles.navbarLogo} />

          {/* 🌿 Menu Dropdown */}
          <View style={styles.menuContainer}>
            <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
              <Text style={styles.navLink}>Menu ▼</Text>
            </TouchableOpacity>

            {/** Mantém no DOM com animação */}
            <Animated.View
              style={[styles.dropdownMenu, menuStyle, { display: menuAberto ? 'flex' : 'none' }]}
            >
              <TouchableOpacity onPress={() => handleNavigate('home')}>
                <Text style={styles.dropdownItem}>🏠 Home</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleNavigate('perfilPF')}>
                <Text style={styles.dropdownItem}>👤 Perfil</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>

          {/* Links fixos */}
          <TouchableOpacity onPress={() => handleNavigate('ajuda')}>
            <Text style={styles.navLink}>Ajuda</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigate('Login')}>
            <Text style={styles.navLink}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* 📄 Conteúdo */}
        <View style={styles.contentContainer}>
          <Image source={require('../IMG/logoCivitascomFundo.jpeg')} style={styles.sectionImage} />
          <Text style={styles.title}>Histórico:</Text>
          <Text style={styles.text}>
            A história do projeto <Text style={styles.bold}>Acolha</Text>, desenvolvido pela empresa <Text style={styles.bold}>Civitas Tech</Text>, teve início no dia <Text style={styles.bold}>10 de fevereiro</Text>, quando a equipe responsável pelo Trabalho de Conclusão de Curso foi oficialmente formada.
          </Text>

          <Text style={styles.text}>
            Em <Text style={styles.bold}>17 de fevereiro</Text>, o grupo definiu o tema do projeto, optando por abordar o acolhimento a imigrantes e refugiados no Brasil. No dia seguinte, <Text style={styles.bold}>18 de fevereiro</Text>, foi escolhido o nome do projeto — <Text style={styles.bold}>Acolha</Text>.
          </Text>

          <Text style={styles.text}>
            A fundação oficial da empresa ocorreu em <Text style={styles.bold}>03 de março</Text>. <Text style={styles.bold}>Inicialmente o projeto era apenas um TCC, mas hoje é uma empresa real</Text>.
          </Text>

          <Image source={require('../IMG/logotipo_acolha 1_fundo(1).png')} style={styles.sectionImage} />
          <Text style={styles.title}>Descrição Sobre a Empresa:</Text>
          <Text style={styles.text}>
            A <Text style={styles.bold}>CivitasTech</Text> aplica tecnologia para promover <Text style={styles.bold}>inclusão social</Text>, especialmente no acolhimento de imigrantes e refugiados.
          </Text>

          <View style={styles.topicContainer}>
            <Text style={styles.text}>• <Text style={styles.bold}>“Civitas”</Text> significa cidadania.</Text>
            <Text style={styles.text}>• <Text style={styles.bold}>“Tech”</Text> representa tecnologia para inclusão.</Text>
          </View>

          <Text style={styles.title}>Objetivos:</Text>
          <View style={styles.topicContainer}>
            <Text style={styles.text}>• Apoiar a integração de imigrantes e refugiados;</Text>
            <Text style={styles.text}>• Promover educação, saúde e trabalho;</Text>
            <Text style={styles.text}>• Fortalecer redes de solidariedade;</Text>
            <Text style={styles.text}>• Ser modelo para outros projetos sociais.</Text>
          </View>
        </View>

        {/*Footer*/}
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>Acolha</Text>
          <Text style={styles.footerText}>Acolhendo vidas. Construindo Futuros</Text>

          <View style={styles.subscribe}>
            <Text style={styles.subscribeTitle}>Sugestões</Text>
            <Text style={styles.subscribeText}>
              Envie aqui suas sugestões, dúvidas ou críticas.{"\n"}Sua opinião é muito importante!
            </Text>
            <View style={styles.inputGroup}>
              <TextInput
                placeholder="Sua Sugestão"
                placeholderTextColor="white"
                style={styles.input}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
              <TouchableOpacity style={styles.inputButton}>
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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflowX: 'hidden',  // Força que o conteúdo não vaze horizontalmente
  },
  navbar: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#357447',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    zIndex: 10,
  },
  navbarLogo: { width: 120, height: 40, resizeMode: 'contain' },
  menuContainer: { position: 'relative' },
  navLink: { color: 'white', fontWeight: 'bold', fontSize: 14, marginHorizontal: 8 },

  dropdownMenu: {
    position: 'absolute',
    top: 30,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    zIndex: 1000,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  dropdownItem: {
    paddingVertical: 8,
    fontSize: 14,
    color: '#357447',
    fontWeight: '600',
    width:65
  },

  contentContainer: { width: '85%', marginTop: 20 },
  sectionImage: { width: '100%', height: 250, resizeMode: 'contain', borderRadius: 16, marginBottom: 2, marginTop: 20 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#357447', marginBottom: 10, marginTop: 10 },
  text: { fontSize: 16, color: 'black', textAlign: 'justify', lineHeight: 22, marginBottom: 25 },
  bold: { fontWeight: 'bold', color: 'black' },
  topicContainer: { marginLeft: 15, marginBottom: 15 },

  footer: {
    alignItems: 'center',
    paddingVertical: 20,
    width: '100%',
    backgroundColor: '#357447',
    marginTop: 20,
  },
  footerTitle: { fontSize: 18, fontWeight: 'bold', color: 'white' },
  footerText: { textAlign: 'center', marginVertical: 5, color: 'white' },
  subscribe: { marginTop: 10, alignItems: 'center', width: '90%' },
  subscribeTitle: { fontSize: 16, fontWeight: 'bold', color: 'white' },
  subscribeText: { textAlign: 'center', marginVertical: 10, color: 'white', lineHeight: 20 },
  inputGroup: { flexDirection: 'row', marginTop: 15, marginBottom: 15, width: '70%' },
  input: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
    color: 'white',
    height: 40
  },
  inputButton: { backgroundColor: '#255736', paddingHorizontal: 15, justifyContent: 'center', borderRadius: 5,width:41,height:41 },
  inputButtonText: { color: 'white', fontWeight: 'bold' },
  socialContainer: { flexDirection: 'row', marginTop: 10, justifyContent: 'center' },
  socialIcon: { width: 35, height: 35, marginHorizontal: 10, borderRadius: 10 },
  footerCopyright: { color: 'white', fontSize: 12, textAlign: 'center', marginTop: 10,fontWeight: 'bold'},
});
