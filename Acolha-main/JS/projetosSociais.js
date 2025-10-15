import React, { useState } from 'react';
import { 
  View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, 
  TextInput, ImageBackground, Linking 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProjetosSociais() {
  const navigation = useNavigation();
  const [menuAberto, setMenuAberto] = useState(false);

  const novosCards = [
    {
      titulo: 'Instituto Adus',
      descricao: 'Atuamos em parceria com solicitantes de refúgio, refugiados e outras pessoas em situação de deslocamento forçado..',
      imagem: require('../IMG/adus.jpeg'),
      link: 'https://adus.org.br/',
    },
    {
      titulo: 'Cidades Invisíveis',
      descricao: 'Atua desde 2012 promovendo inclusão social, acesso ao conhecimento, tecnologia, saúde...',
      imagem: require('../IMG/cidadesInvisiveis.webp'),
      link: 'https://cidadesinvisiveis.com.br/',
    },
    {
      titulo: 'Missão Paz',
      descricao: 'Instituição filantrópica que apoia e acolhe imigrantes e refugiados na cidade de São Paulo desde os anos 1930...',
      imagem: require('../IMG/missaoPaz.jpg'),
      link: 'https://missaonspaz.org/quem-somos/',
    },
    {
      titulo: 'CAMI - Centro de Apoio Pastoral do Migrante',
      descricao: 'Organização sem fins lucrativos que promove a inclusão social, econômica, política e cultural de imigrantes e refugiados...',
      imagem: require('../IMG/cami.png'),
      link: 'https://www.cami.org.br/',
    },
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

          {/* Dropdown */}
          <View style={styles.menuContainer}>
            <TouchableOpacity onPress={toggleMenu}>
              <Text style={styles.navLink}>Menu ▼</Text>
            </TouchableOpacity>
            {menuAberto && (
              <View style={styles.dropdownMenu}>
                <TouchableOpacity onPress={() => { setMenuAberto(false); navigation.navigate('home'); }}>
                  <Text style={styles.dropdownItem}>Home</Text>
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
        {novosCards.map((card, index) => (
          <View key={index} style={styles.card}>
            <Image source={card.imagem} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{card.titulo}</Text>
            <Text style={styles.cardText}>{card.descricao}</Text>
            <TouchableOpacity
              style={styles.cardButton}
              onPress={() => Linking.openURL(card.link)}
            >
              <Text style={styles.cardButtonText}>Ler Mais</Text>
            </TouchableOpacity>
          </View>
        ))}

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
  container: { alignItems: 'center', paddingVertical: 0 },

  navbar: { 
    width: '100%', paddingVertical: 10, paddingHorizontal: 10, backgroundColor: '#357447',
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap'
  },
  navbarLogo: { width: 120, height: 40, resizeMode: 'contain', marginBottom: 5 },

  menuContainer: { position: 'relative' },
  fixedLinks: { flexDirection: 'row', alignItems: 'center' },
  navLink: { color: 'white', fontWeight: 'bold', fontSize: 12, marginHorizontal: 8 },

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
    width: '70%', backgroundColor: '#3B6D49', borderRadius: 12, padding: 20,
    marginVertical: 35, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 6 }, shadowRadius: 6
  },
  cardImage: { width: '100%', height: 180, borderRadius: 12, marginBottom: 12 },
  cardTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 15, color: 'white', textAlign: 'center' },
  cardText: { textAlign: 'justify', marginBottom: 18, color: 'white', lineHeight: 20 },
  cardButton: { borderWidth: 1, borderColor: 'white', borderRadius: 8, paddingVertical: 8, paddingHorizontal: 20 },
  cardButtonText: { color: 'white', fontWeight: 'bold' },

  footer: { alignItems: 'center', paddingVertical: 20, width: '100%', backgroundColor: '#357447' },
  footerTitle: { fontSize: 18, fontWeight: 'bold', color: 'white' },
  footerText: { textAlign: 'center', marginVertical: 5, color: 'white' },

  subscribe: { marginTop: 10, alignItems: 'center', width: '90%' },
  subscribeTitle: { fontSize: 16, fontWeight: 'bold', color: 'white' },
  subscribeText: { textAlign: 'center', marginVertical: 10, color: 'white', lineHeight: 20 },
  inputGroup: { flexDirection: 'row', marginTop: 5, width: '80%' },
  input: {
    backgroundColor: 'transparent', borderWidth: 1, borderColor: 'white', padding: 10,
    borderRadius: 5, flex: 1, marginRight: 5, color: 'white', height: 43
  },
  inputButton: { backgroundColor: '#255736', paddingHorizontal: 15, justifyContent: 'center', borderRadius: 5 },
  inputButtonText: { color: 'white', fontWeight: 'bold' },

  socialContainer: { flexDirection: 'row', marginTop: 10, justifyContent: 'center' },
  socialIcon: { width: 35, height: 35, marginHorizontal: 10,borderRadius: 10 },

  footerCopyright: { color: 'white', fontSize: 12, textAlign: 'center', marginTop: 10 },
});
