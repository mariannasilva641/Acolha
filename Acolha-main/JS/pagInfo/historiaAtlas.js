import React, { useState, useRef, useEffect } from "react";
import {View,Text,Image,ScrollView,TouchableOpacity,Animated,Easing,ImageBackground,Linking,useWindowDimensions,TextInput,} from "react-native";
import styles from "../estilo/estiloPagInfo/estiloHistAtlas.js";
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
    source={require("../../IMG/Atlas.png")}
    style={styles.cardImage}
    resizeMode="cover"
  />
  <Text style={styles.cardTitle}>História do Mascote Atlas</Text>

  <Text style={styles.cardText}>
    {"\u00A0\u00A0"}A criação de <Text style={{ fontWeight: "bold" }}>Atlas</Text>, o mascote do projeto Acolha, nasceu da ideia de representar o <Text style={{ fontWeight: "bold" }}>acolhimento</Text>, a <Text style={{ fontWeight: "bold" }}>empatia</Text> e a <Text style={{ fontWeight: "bold" }}>solidariedade</Text> com imigrantes e refugiados que chegam ao Brasil. Em 28 de março, o administrador David Wendel sugeriu ao produtor midiático Vinícius Novaes que desenvolvesse um mascote que simbolizasse esses valores.
  </Text>

  <Text style={styles.cardText}>
    {"\u00A0\u00A0"}Desde o início, decidiu-se que o personagem seria um animal <Text style={{ fontWeight: "bold" }}>antropomórfico</Text>, ou seja, com características humanas. Foram pesquisadas espécies conhecidas por realizar grandes <Text style={{ fontWeight: "bold" }}>migrações</Text>, já que a temática da viagem e do deslocamento é essencial para o propósito do Acolha. A primeira ideia foi uma borboleta-monarca, mas ela foi descartada por migrar apenas entre países da América do Norte. Assim, a equipe optou por uma <Text style={{ fontWeight: "bold" }}>ave migratória</Text>, e o falcão-peregrino foi escolhido por sua força, liberdade e capacidade de percorrer longas distâncias — qualidades que refletem a jornada de quem busca um novo lar.
  </Text>

  <Text style={styles.cardText}>
    {"\u00A0\u00A0"}Com base nisso, Vinícius iniciou a produção utilizando o software <Text style={{ fontWeight: "bold" }}>GIMP</Text>. O primeiro modelo foi criado rapidamente e, ao longo das semanas seguintes, passou por diversas alterações visuais. O lenço verde no pescoço foi removido, a mala ganhou novas cores e adesivos que representam paisagens do mundo, além do logo do Acolha no centro — uma sugestão da integrante Yasmyn. Após ajustes de saturação e detalhes, o modelo final foi concluído em 14 de abril.
  </Text>

  <Text style={styles.cardText}>
    {"\u00A0\u00A0"}Na etapa seguinte, a equipe discutiu possíveis nomes para o mascote. Entre as cinco opções apresentadas — Spiiro, Shift, Pelegrine, Wendell e <Text style={{ fontWeight: "bold" }}>Atlas</Text> — o nome escolhido foi Atlas, uma referência aos <Text style={{ fontWeight: "bold" }}>livros de mapas</Text> que simbolizam o mundo, as viagens e a conexão entre os povos.
  </Text>

  <Text style={styles.cardText}>
    {"\u00A0\u00A0"}Por fim, em 27 de abril, Atlas ganhou uma identidade completa: seu nome completo passou a ser Wendell “Atlas” Pelegrine, um <Text style={{ fontWeight: "bold" }}>falcão-peregrino</Text> do gênero masculino, viajante e acolhedor de imigrantes e refugiados. Ele ama <Text style={{ fontWeight: "bold" }}>voar</Text>, <Text style={{ fontWeight: "bold" }}>viajar</Text>, estudar <Text style={{ fontWeight: "bold" }}>geografia</Text> e celebrar a <Text style={{ fontWeight: "bold" }}>diversidade</Text>. Por outro lado, detesta a <Text style={{ fontWeight: "bold" }}>xenofobia</Text>, a <Text style={{ fontWeight: "bold" }}>discriminação</Text> e qualquer forma de rejeição a quem busca um novo começo.
  </Text>

  <Text style={styles.cardText}>
    {"\u00A0\u00A0"}Assim nasceu <Text style={{ fontWeight: "bold" }}>Atlas</Text>, o símbolo do Acolha — um viajante do bem que carrega em suas asas a mensagem de que o mundo é de todos e que <Text style={{ fontWeight: "bold" }}>acolher</Text> é um gesto de humanidade.
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

