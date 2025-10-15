import React, { useState } from 'react';
import { 
  View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, 
  TextInput, ImageBackground, Linking 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const [menuAberto, setMenuAberto] = useState(false);

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

          {/* Dropdown Menu */}
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

        {/* Conteúdo textual da história */}
        <View style={styles.contentContainer}>

          {/* HISTÓRICO */}
          <Image source={require('../IMG/CivitasTech.png')} style={styles.sectionImage} />
          <Text style={styles.title}>Histórico:</Text>
          <Text style={styles.text}>
            A história do projeto <Text style={styles.bold}>Acolha</Text>, desenvolvido pela empresa <Text style={styles.bold}>Civitas Tech</Text>, teve início no dia <Text style={styles.bold}>10 de fevereiro</Text>, 
            quando a equipe responsável pelo Trabalho de Conclusão de Curso foi oficialmente formada.
          </Text>
          <Text style={styles.text}>
            Em <Text style={styles.bold}>17 de fevereiro</Text>, o grupo definiu o tema do projeto, optando por abordar o acolhimento a imigrantes 
            e refugiados no Brasil. No dia seguinte, <Text style={styles.bold}>18 de fevereiro</Text>, foi escolhido o nome do projeto — <Text style={styles.bold}>Acolha</Text>, 
            uma sugestão de <Text style={styles.bold}>David Wendel</Text> que foi aprovada por todos os integrantes.
          </Text>
          <Text style={styles.text}>
            A fundação oficial da empresa ocorreu em <Text style={styles.bold}>03 de março</Text>, momento em que foram definidos o nome e o ramo de atuação. 
            <Text style={styles.bold}>Inicialmente o projeto era apenas um Trabalho de Conclusão de Curso, mas hoje somos uma empresa de fato, 
            com o Acolha sendo nosso primeiro projeto de apoio a imigrantes e refugiados — o primeiro de muitos.</Text>
          </Text>
          <Text style={styles.text}>
            Em <Text style={styles.bold}>28 de março</Text>, o administrador <Text style={styles.bold}>David Wendel</Text> organizou o início das atividades do projeto, distribuindo as tarefas conforme o papel de cada integrante. 
            Em <Text style={styles.bold}>31 de março</Text>, foi criada a página oficial do Acolha no Instagram, com o perfil <Text style={styles.bold}>@acolha2025</Text>.
          </Text>
          <Text style={styles.text}>
            No dia <Text style={styles.bold}>15 de abril</Text>, o mascote oficial do projeto foi apresentado. Batizado de <Text style={styles.bold}>Atlas</Text>, o personagem foi desenvolvido por <Text style={styles.bold}>Vinícius Novaes</Text> e passou a representar visualmente os ideais da equipe. 
            Em <Text style={styles.bold}>08 de maio</Text>, foi publicado o primeiro reels da página, uma entrevista com <Text style={styles.bold}>Madyson</Text>.
          </Text>
          <Text style={styles.text}>
            A equipe de desenvolvimento iniciou a programação do site em <Text style={styles.bold}>26 de maio</Text>, consolidando ainda mais a presença digital da empresa e do projeto Acolha.
          </Text>

          {/* SOBRE A EMPRESA */}
          <Image source={require('../IMG/width_500.webp')} style={styles.sectionImage} />
          <Text style={styles.title}>Descrição Sobre a Empresa:</Text>
          <Text style={styles.text}>
            A <Text style={styles.bold}>CivitasTech</Text> é uma empresa desenvolvedora idealizada com o propósito de aplicar soluções tecnológicas em prol da <Text style={styles.bold}>inclusão social</Text>, 
            com ênfase no acolhimento e integração de imigrantes e refugiados. 
            Sua atuação está voltada ao desenvolvimento de plataformas digitais que promovam o <Text style={styles.bold}>acesso à informação, capacitação e serviços essenciais</Text>, 
            contribuindo para a <Text style={styles.bold}>cidadania plena</Text> dos indivíduos atendidos.
          </Text>
          <Text style={styles.text}>
            O nome da empresa carrega significados representativos de sua missão e valores:
          </Text>

          {/* Tópicos com recuo */}
          <View style={styles.topicContainer}>
            <Text style={styles.text}>• <Text style={styles.bold}>“Civitas”</Text>, palavra de origem latina que significa cidadania, simboliza o compromisso com os direitos civis, a equidade social e o respeito à diversidade.</Text>
            <Text style={styles.text}>• <Text style={styles.bold}>“Tech”</Text>, derivado de tecnologia, reforça o papel fundamental dos recursos tecnológicos como ferramentas de transformação social e inclusão.</Text>
          </View>

          <Text style={styles.text}>
            A fundação oficial da empresa ocorreu no dia <Text style={styles.bold}>03 de março</Text>, data em que foram definidos, por meio de votação entre os membros do grupo, 
            tanto o nome quanto o ramo de atuação da empresa, consolidando sua identidade e direcionamento para o desenvolvimento do Projeto Acolha.
          </Text>

          {/* OBJETIVOS */}
          <Text style={styles.title}>Objetivos da Empresa e do Projeto:</Text>
          <Text style={styles.text}>
            O principal objetivo da <Text style={styles.bold}>CivitasTech</Text> é aplicar soluções tecnológicas que promovam a <Text style={styles.bold}>inclusão social</Text>, 
            com foco no acolhimento e integração de imigrantes e refugiados. 
            Buscamos oferecer ferramentas digitais que facilitem o <Text style={styles.bold}>acesso à informação, capacitação e serviços essenciais</Text>, 
            contribuindo para a <Text style={styles.bold}>cidadania plena</Text> dos indivíduos atendidos.
          </Text>
          <Text style={styles.text}>
            O projeto <Text style={styles.bold}>Acolha</Text>, como nosso primeiro projeto de impacto social, tem como objetivos específicos:
          </Text>

          {/* Lista de objetivos com recuo */}
          <View style={styles.topicContainer}>
            <Text style={styles.text}>• Garantir <Text style={styles.bold}>apoio social e integração</Text> de imigrantes e refugiados no Brasil;{"\n"}</Text>
            <Text style={styles.text}>• Promover <Text style={styles.bold}>educação, saúde, oportunidades de trabalho</Text> e cidadania;{"\n"}</Text>
            <Text style={styles.text}>• Contribuir para a criação de uma <Text style={styles.bold}>rede de solidariedade e cooperação</Text>;{"\n"}</Text>
            <Text style={styles.text}>• Servir como modelo para futuros <Text style={styles.bold}>projetos de inclusão social</Text> que a CivitasTech pretende desenvolver.</Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>Acolha</Text>
          <Text style={styles.footerText}>Acolhendo vidas. Construindo Futuros</Text>

          {/* Input de sugestões */}
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

          {/* Redes sociais */}
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
  navbarLogo: { width: 120, height: 40, resizeMode: 'contain' },

  menuContainer: { position: 'relative' },
  fixedLinks: { flexDirection: 'row', alignItems: 'center' },
  navLink: { color: 'white', fontWeight: 'bold', fontSize: 14, marginHorizontal: 8 },

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
  dropdownItem: { paddingVertical: 8, fontSize: 14, color: '#357447' },

  contentContainer: { width: '80%', marginTop: 0 },
  sectionImage: { width: '100%', height: 270, borderRadius: 12, marginBottom: 30, marginTop: 50 },

  title: { fontSize: 18, fontWeight: 'bold', color: '#357447', marginBottom: 15, marginTop: 30 },
  text: { fontSize: 16, color: 'black', textAlign: 'justify', lineHeight: 22, marginBottom: 15 },
  bold: { fontWeight: 'bold', color: 'black' },

  topicContainer: { marginLeft: 15 },

  footer: { alignItems: 'center', paddingVertical: 20, width: '100%', backgroundColor: '#357447', marginTop: 20 },
  footerTitle: { fontSize: 18, fontWeight: 'bold', color: 'white' },
  footerText: { textAlign: 'center', marginVertical: 5, color: 'white' },

  subscribe: { marginTop: 10, alignItems: 'center', width: '90%' },
  subscribeTitle: { fontSize: 16, fontWeight: 'bold', color: 'white' },
  subscribeText: { textAlign: 'center', marginVertical: 10, color: 'white', lineHeight: 20 },
  inputGroup: { flexDirection: 'row', marginTop: 5, width: '80%' },
  input: {
    backgroundColor: 'transparent', borderWidth: 1, borderColor: 'white', padding: 10,
    borderRadius: 5, flex: 1, marginRight: 5, color: 'white', height: 40
  },
  inputButton: { backgroundColor: '#255736', paddingHorizontal: 15, justifyContent: 'center', borderRadius: 5 },
  inputButtonText: { color: 'white', fontWeight: 'bold' },

  socialContainer: { flexDirection: 'row', marginTop: 10, justifyContent: 'center' },
  socialIcon: { width: 35, height: 35, marginHorizontal: 10, borderRadius: 10 },

  footerCopyright: { color: 'white', fontSize: 12, textAlign: 'center', marginTop: 10 },
});
