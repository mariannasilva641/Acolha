import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

export default StyleSheet.create({
  background: { flex: 1, width: '100%', paddingTop: 20 },
  scrollContent: { flexGrow: 1, justifyContent: 'space-between', minHeight: height },

  contentContainer: { width: '100%', maxWidth: 600, alignSelf: 'center', paddingHorizontal: isTablet ? 40 : 20 },

  title: { fontSize: isTablet ? 28 : 22, fontWeight: 'bold', color: '#255736', marginBottom: 20, textAlign: 'center', fontFamily:'Questrial-Regular', backgroundColor:'#FFFFFF' },

  card: { width: '95%', backgroundColor: 'white', borderRadius: 15, padding: isTablet ? 25 : 15, marginBottom: 20, alignSelf: 'center', maxWidth: 600 },

  sectionTitle: { fontSize: isTablet ? 20 : 16, fontWeight: 'bold', color: '#357447', marginBottom: 10, fontFamily:'Questrial-Regular' },

  infoItem: { fontSize: isTablet ? 16 : 14, marginBottom: 6, fontFamily:'Questrial-Regular' },

  button: { backgroundColor: '#357447', paddingVertical: isTablet ? 14 : 10, borderRadius: 8, alignItems: 'center', marginBottom: 10, width: '100%' },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: isTablet ? 16 : 14, fontFamily:'Questrial-Regular' },

  subCard: { backgroundColor: '#f0f0f0', padding: isTablet ? 15 : 10, borderRadius: 8, marginBottom: 10 },

  projectTitle: { fontWeight: 'bold', marginBottom: 5, color: '#255736', fontSize: isTablet ? 18 : 14, fontFamily:'Questrial-Regular' },
  projectImage: { width: '100%', height: isTablet ? 140 : 100, borderRadius: 8, marginBottom: 5 },
  linkText: { color: '#357447', fontWeight: 'bold', marginTop: 5, fontSize: isTablet ? 16 : 14, fontFamily:'Questrial-Regular' },

  backButton: { backgroundColor: '#255736', padding: isTablet ? 14 : 10, borderRadius: 8, marginTop: 30, width: '80%', maxWidth: 400, alignItems: 'center', alignSelf: 'center' },
  backButtonText: { color: 'white', fontWeight: 'bold', fontSize: isTablet ? 18 : 16, fontFamily:'Questrial-Regular' },

  editButton: { backgroundColor: '#255736', paddingVertical: isTablet ? 14 : 10, borderRadius: 8, alignItems: 'center', marginTop: 25, width: '100%' },
  editButtonText: { color: 'white', fontWeight: 'bold', fontSize: isTablet ? 16 : 14, fontFamily:'Questrial-Regular' },

  profilePhotoContainer: {
  alignItems: 'center',        // centraliza a foto horizontalmente
  marginBottom: 15,            // espaço abaixo da foto
  marginTop: 10,               // espaço acima da foto
},

profilePhoto: {
  width: 100,                  // largura da foto
  height: 100,                 // altura da foto
  borderRadius: 50,            // deixa a foto redonda
  borderWidth: 2,              // largura da borda
  borderColor: '#ffffff',      // cor da borda (branca neste caso)
  backgroundColor: '#cccccc',  // cor de fundo caso a imagem não carregue
  resizeMode: 'cover',         // mantém proporção da imagem
}, 

  footerWrapper: { width: '100%', backgroundColor: '#357447', paddingVertical: isTablet ? 35 : 25, marginTop:60 },
  footer: { paddingHorizontal: 20, alignItems: 'center', maxWidth: 600, alignSelf: 'center' },
  footerTitle: { fontSize: isTablet ? 20 : 18, fontWeight: 'bold', color: 'white', marginBottom: 5, fontFamily:'Questrial-Regular' },
  footerText: { color: 'white', textAlign: 'center', marginVertical: 5, lineHeight: 22, fontSize: isTablet ? 16 : 14, fontFamily:'Questrial-Regular' },

  subscribe: { marginTop: 10, alignItems: 'center', width: '100%' },
  subscribeTitle: { fontSize: isTablet ? 18 : 16, fontWeight: 'bold', color: 'white', fontFamily:'Questrial-Regular' },
  subscribeText: { textAlign: 'center', marginVertical: 10, color: 'white', lineHeight: 22, fontSize: isTablet ? 15 : 14, fontFamily:'Questrial-Regular' },

  inputGroup: { flexDirection: 'row', width: isTablet ? '70%' : '85%', maxWidth: 400, alignItems: 'center' },
  inputSugestao: { backgroundColor: 'transparent', borderWidth: 1, borderColor: 'white', padding: 10, borderRadius: 5, flex: 1, marginRight: 5, marginTop: 15, marginBottom: 2, height: 40, color: 'white', fontFamily:'Questrial-Regular' },
  inputButton: { backgroundColor: '#255736', paddingHorizontal: 15, justifyContent: 'center', borderRadius: 5, height: 41 },
  inputButtonText: { color: 'white', fontWeight: 'bold' },

  socialContainer: { flexDirection: 'row', marginTop: 2, justifyContent: 'center' },
  socialIcon: { width: 50, height: 40, marginHorizontal: 2 },

  footerCopyright: { color: 'white', fontSize: 12, textAlign: 'center', marginTop: 5, fontWeight: 'bold', fontFamily:'Questrial-Regular' },
});
