import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <Text style={styles.logo}>Acolha</Text>
        <View style={styles.navLinks}>
          <TouchableOpacity onPress={() => navigation.navigate('projetosSociais')}>
            <Text style={styles.navLink}>Projetos Sociais</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ajuda')}>
            <Text style={styles.navLink}>Ajuda</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
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

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Acolha</Text>
        <Text style={styles.footerText}>Acolhendo vidas. Construindo Futuros</Text>
        <Text style={styles.footerInfo}>Endereço: Rua Exemplo, 123 - São Paulo/SP</Text>
        <Text style={styles.footerInfo}>Email: contato@acolha.com</Text>
        <Text style={styles.footerInfo}>Telefone: (11) 1234-5678</Text>
        <Text style={styles.footerSocial}>Instagram: @acolha2025 | Facebook: /acolha</Text>
        <Text style={styles.footerCopyright}>
          © 2025 todos os direitos reservados. Acolha é uma marca registrada da Civitas Tech.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    alignItems: 'center', 
    paddingVertical: 0, // remove o espaço acima e abaixo do conteúdo
    backgroundColor: '#f2f2f2' 
  },

  navbar: { 
    width: '100%', 
    padding: 10, 
    backgroundColor: '#357447', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  logo: { color: 'white', fontWeight: 'bold', fontSize: 20 },
  navLinks: { flexDirection: 'row' },
  navLink: { color: 'white', marginHorizontal: 10 },

  card: { 
    width: '90%', 
    backgroundColor: '#357447', 
    borderRadius: 10, 
    padding: 15, 
    marginVertical: 5, // diminui o espaço entre os cards
    alignItems: 'center', 
    shadowColor: '#000', 
    shadowOpacity: 0.1, 
    shadowOffset: { width: 0, height: 4 }, 
    shadowRadius: 4 
  },
  cardImage: { width: '100%', height: 150, borderRadius: 10, marginBottom: 10 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 5, color: 'white' },
  cardText: { textAlign: 'justify', marginBottom: 10, color: 'white' },
  cardButton: { borderWidth: 1, borderColor: '#fff', borderRadius: 5, padding: 10 },
  cardButtonText: { color: 'white', fontWeight: 'bold' },

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
