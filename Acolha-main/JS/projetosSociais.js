import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Barra de navegação */}
      <View style={styles.navbar}>
        <Text style={styles.logo}>Acolha</Text>
        <View style={styles.navLinks}>
          <Text style={styles.navLink}>Projetos Sociais</Text>
          <Text style={styles.navLink}>Ajuda</Text>
          <Text style={styles.navLink}>Login</Text>
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
        <Text style={styles.footerText}>Acolhendo vidas. Construindo Futuros</Text>

        {/* Formulário de sugestões */}
        <View style={styles.subscribe}>
          <Text style={styles.subscribeTitle}>Sugestões</Text>
          <Text style={styles.subscribeText}>
            Envie aqui suas sugestões, dúvidas ou críticas. Sua opinião é muito importante para nós!
          </Text>
          <View style={styles.inputGroup}>
            <TextInput placeholder="Seu e-mail" style={styles.input} />
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
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#f2f2f2',
  },
  navbar: {
    width: '100%',
    padding: 10,
    backgroundColor: '#357447',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: { color: 'white', fontWeight: 'bold', fontSize: 20 },
  navLinks: { flexDirection: 'row' },
  navLink: { color: 'white', marginHorizontal: 10 },

  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
  },
  cardImage: { width: '100%', height: 150, borderRadius: 10, marginBottom: 10 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  cardText: { textAlign: 'justify', marginBottom: 10 },
  cardButton: {
    borderWidth: 1,
    borderColor: '#357447',
    borderRadius: 5,
    padding: 10,
  },
  cardButtonText: { color: '#357447', fontWeight: 'bold' },

  footer: { alignItems: 'center', paddingVertical: 20, width: '100%', backgroundColor: '#357447' },
  footerTitle: { fontSize: 18, fontWeight: 'bold', color: 'white' },
  footerText: { textAlign: 'center', marginVertical: 5, color: 'white' },

  subscribe: { marginTop: 10, alignItems: 'center' },
  subscribeTitle: { fontSize: 16, fontWeight: 'bold', color: 'white' },
  subscribeText: { textAlign: 'center', marginVertical: 5, color: 'white' },
  inputGroup: { flexDirection: 'row', marginTop: 5 },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 5,
    width: 200,
    marginRight: 5,
  },
  inputButton: {
    backgroundColor: '#255736',
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderRadius: 5,
  },
  inputButtonText: { color: 'white', fontWeight: 'bold' },

  footerCopyright: { color: 'white', fontSize: 12, textAlign: 'center', marginTop: 10 },
});