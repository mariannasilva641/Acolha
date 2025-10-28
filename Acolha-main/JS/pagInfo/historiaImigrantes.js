import React, { useState, useRef, useEffect } from "react";
import {View,Text,Image,ScrollView, TouchableOpacity,Animated,Easing,ImageBackground,Linking,useWindowDimensions,TextInput,} from "react-native";
import styles from "../estilo/estiloPagInfo/estiloHistImigrantes.js";
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
    source={require("../../IMG/Refugiado.jpg")}
    style={styles.cardImage}
    resizeMode="cover"
  />
  <Text style={styles.cardTitle}>História dos Imigrantes</Text>
  
  <Text style={styles.cardText}>
    {"\u00A0\u00A0"}O fenômeno <Text style={{ fontWeight: "bold" }}>migratório</Text> constitui uma das questões mais complexas e urgentes do século XXI, apresentando desafios multidimensionais aos países de acolhida. No caso brasileiro, essa complexidade se intensifica ao se considerar a <Text style={{ fontWeight: "bold" }}>história</Text>, que envolve desafios econômicos, sociais, culturais e políticos. O Brasil tem uma longa <Text style={{ fontWeight: "bold" }}>história de imigração</Text>, com fluxos significativos de imigrantes europeus, asiáticos e latino-americanos, especialmente durante os séculos XIX e XX, impulsionados por fatores como a busca por melhores condições de vida e oportunidades de trabalho.
  </Text>

  <Text style={styles.cardText}>
    {"\u00A0\u00A0"}Atualmente, o país continua a ser destino de muitos <Text style={{ fontWeight: "bold" }}>migrantes</Text>, especialmente vindos de países vizinhos, como a Venezuela, além de outros países da América Latina e até da África. Esses fluxos são motivados por fatores como instabilidade política, crises econômicas e desastres naturais. No entanto, os migrantes enfrentam diversos obstáculos, incluindo <Text style={{ fontWeight: "bold" }}>discriminação</Text>, dificuldades de integração no mercado de trabalho e o acesso precário a serviços básicos, como saúde e educação.
  </Text>

  <Text style={styles.cardText}>
    {"\u00A0\u00A0"}Um dos maiores desafios é a <Text style={{ fontWeight: "bold" }}>desigualdade regional</Text> no Brasil. As regiões Norte e Nordeste, por exemplo, enfrentam maior dificuldade em prover recursos e infraestrutura adequados para acolher os migrantes, enquanto as regiões Sudeste e Sul têm mais recursos, mas também sofrem com tensões relacionadas ao aumento da população migrante. Além disso, muitos migrantes acabam ocupando postos de trabalho informais e precários, o que reflete a falta de políticas públicas de integração e qualificação profissional.
  </Text>

  <Text style={styles.cardText}>
    {"\u00A0\u00A0"}Apesar dos avanços em termos de <Text style={{ fontWeight: "bold" }}>legislação</Text> que garantem os direitos dos migrantes, como a Lei de Migração de 2017, a implementação dessas políticas ainda enfrenta desafios significativos. A <Text style={{ fontWeight: "bold" }}>xenofobia</Text> e a discriminação também são questões a serem enfrentadas, já que migrantes, especialmente os de países mais empobrecidos, são frequentemente alvo de preconceito.
  </Text>

  <Text style={styles.cardText}>
    {"\u00A0\u00A0"}Portanto, a integração dos migrantes no Brasil exige uma ação coordenada entre governo, organizações não governamentais e sociedade civil, com foco na promoção da <Text style={{ fontWeight: "bold" }}>inclusão social</Text>, acesso
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

