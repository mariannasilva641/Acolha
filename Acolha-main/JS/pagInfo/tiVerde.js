import React, { useState, useRef, useEffect } from "react";
import {View,Text,Image,ScrollView,TouchableOpacity,Animated,Easing,ImageBackground,Linking,useWindowDimensions,TextInput,} from "react-native";
import styles from "../estilo/estiloPagInfo/estiloTiVerde.js";
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

 