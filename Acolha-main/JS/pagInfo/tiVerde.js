import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  Easing,
  ImageBackground,
  Linking,
  useWindowDimensions,
  Platform,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function TiVerde() {
  const navigation = useNavigation();
  const [menuAberto, setMenuAberto] = useState(false);
  const menuAnim = useRef(new Animated.Value(0)).current;
  const { width } = useWindowDimensions();

  const toggleMenu = () => setMenuAberto(!menuAberto);

  useEffect(() => {
    Animated.timing(menuAnim, {
      toValue: menuAberto ? 1 : 0,
      duration: 200,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [menuAberto]);

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

  return (
    <ImageBackground
      source={require("../../IMG/FundoAcolha.png")}
      style={styles.background}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Navbar */}
        <View style={styles.navbar}>
          <Image
            source={require("../../IMG/LogoAcolhaBranco.png")}
            style={styles.navbarLogo}
          />

          <View style={styles.navbarLinks}>
            <TouchableOpacity onPress={() => handleNavigate("ajuda")}>
              <Text style={styles.navLink}>Ajuda</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigate("Login")}>
              <Text style={styles.navLink}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.menuContainer}>
            <TouchableOpacity onPress={toggleMenu}>
              <Image
                source={require("../../IMG/menu.png")}
                style={{ width: 24, height: 24, marginRight: 20 }}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <Animated.View
              style={[
                styles.dropdownMenu,
                menuStyle,
                { display: menuAberto ? "flex" : "none" },
              ]}
            >
              <TouchableOpacity
                onPress={() => handleNavigate("home")}
              >
                <Text style={styles.dropdownItem}>🏠 Home</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleNavigate("projetosSociais")}
              >
                <Text style={styles.dropdownItem}>📌 Projetos Sociais</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleNavigate("sobreNos")}>
                <Text style={styles.dropdownItem}>ℹ️ Sobre Nós</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>

   {/* Card de conteúdo */}
<View style={styles.card}>
  <Image
    source={require("../../IMG/tiVerde.webp")}
    style={styles.cardImage}
    resizeMode="cover"
  />
  <Text style={styles.cardTitle}>TI Verde</Text>

  <Text style={styles.cardText}>
    {"\u00A0\u00A0"}Destarte, é necessário compreender os conceitos que englobam a <Text style={{ fontWeight: "bold" }}>sustentabilidade ambiental</Text>. De acordo com o site oficial do Governo, esse tema denomina-se pelo conjunto de práticas sustentáveis que corroboram para a preservação e o uso consciente dos <Text style={{ fontWeight: "bold" }}>recursos naturais</Text>, incentivando empresas e indivíduos a reduzirem o impacto ambiental de suas ações.
  </Text>

  <Text style={styles.cardText}>
    {"\u00A0\u00A0"}A <Text style={{ fontWeight: "bold" }}>TI Verde</Text> surge nesse contexto como uma abordagem tecnológica responsável, que visa minimizar o <Text style={{ fontWeight: "bold" }}>consumo de energia</Text>, otimizar o uso de equipamentos e prolongar sua <Text style={{ fontWeight: "bold" }}>vida útil</Text>. Isso inclui o <Text style={{ fontWeight: "bold" }}>reaproveitamento de materiais</Text>, a <Text style={{ fontWeight: "bold" }}>reciclagem de componentes</Text> e o uso de softwares que otimizem processos, reduzindo o desperdício de recursos digitais e físicos.
  </Text>
</View>


        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>Acolha</Text>
          <Text style={styles.footerText}>
            Acolhendo vidas. Construindo Futuros
          </Text>

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
            <TouchableOpacity
              onPress={() => Linking.openURL("https://www.instagram.com/")}
            >
              <Image
                source={require("../../IMG/instragam.png")}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL("mailto:contato@acolha.com")}
            >
              <Image
                source={require("../../IMG/email.png")}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.footerCopyright}>
            © 2025 todos os direitos reservados.{"\n"}Acolha é uma marca
            registrada da Civitas Tech.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

// --- ESTILOS ---
const styles = StyleSheet.create({
  background: { flex: 1, width: "100%", height: "100%" },
  container: {
    alignItems: "center",
    backgroundColor: "transparent",
    width: "100%",
    flexGrow: 1,
    justifyContent: "space-between",
  },

  // Navbar
  navbar: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#357447",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 10,
  },
  navbarLogo: { width: 120, height: 40, resizeMode: "contain" },
  menuContainer: { position: "relative" },
  navbarLinks: { flexDirection: "row", alignItems: "center", gap: 15 },
  navLink: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
    fontFamily: "Questrial-Regular",
  },
  dropdownMenu: {
    position: "absolute",
    top: 25,
    right: 0,
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    zIndex: 1000,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  dropdownItem: {
    paddingVertical: 6,
    fontSize: 14,
    color: "#357447",
    fontWeight: "600",
    width: 140,
  },

  // Card
  card: {
    width: "85%",
    backgroundColor: "#357447",
    borderRadius: 12,
    padding: 20,
    marginVertical: 25,
    alignItems: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  cardImage: { width: "100%", height: 220, borderRadius: 12, marginBottom: 12 },
  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
    textAlign: "center",
  },
  cardText: {
    textAlign: "justify",
    color: "#e9f6eb",
    lineHeight: 24,
    fontSize: 18,
  },

  // Footer
  footer: {
    alignItems: "center",
    paddingVertical: 15,
    width: "100%",
    backgroundColor: "#357447",
  },
  footerTitle: {
    marginTop: 20,
    fontFamily: "Questrial-Regular",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  footerText: {
    fontFamily: "Questrial-Regular",
    textAlign: "center",
    marginVertical: 5,
    color: "white",
  },

  subscribe: { marginTop: 10, alignItems: "center", width: "90%" },
  subscribeTitle: { fontSize: 16, fontWeight: "bold", color: "white" },
  subscribeText: {
    fontFamily: "Questrial-Regular",
    textAlign: "center",
    marginVertical: 10,
    color: "white",
    lineHeight: 20,
  },
  inputGroup: { flexDirection: "row", marginTop: 15, marginBottom: 1, width: "70%" },
  input: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
    color: "white",
    height: 34,
    fontFamily: "Questrial-Regular",
  },
  inputButton: {
    backgroundColor: "#255736",
    paddingHorizontal: 15,
    justifyContent: "center",
    borderRadius: 5,
  },
  inputButtonText: { color: "white", fontWeight: "bold" },

  socialContainer: { flexDirection: "row", marginTop: 10, justifyContent: "center" },
  socialIcon: { width: 50, height: 50, marginHorizontal: 0.2, borderRadius: 10 },
  footerCopyright: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
    marginTop: 5,
    fontWeight: "bold",
  },
});
