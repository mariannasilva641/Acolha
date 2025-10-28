import { StyleSheet } from "react-native";
export default StyleSheet.create({
    
  safeArea: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  container: {
  
    paddingBottom: 0,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#357447",
    marginBottom: 20,
    textAlign: "center",
    marginTop:40,
    fontFamily:'Questrial-Regular'
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    margin:30,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily:'Questrial-Regular',
    alignItems:'center',
    fontWeight: "bold",
    color: "#357447",
    marginBottom: 10,
    textAlign:'center',
    marginTop:20
  },
  label: {
    fontWeight: "bold",
    marginTop: 10,
    color: "#357447",
    fontFamily:'Questrial-Regular',
  },
  valor: {
    fontSize: 16,
     fontFamily:'Questrial-Regular',
    color: "#333",
    marginTop: 2,
  },
  botaoEditar: {
    backgroundColor: "#357447",
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginTop: 20,
    alignSelf: "center",
  },
  botaoTexto: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    fontFamily:'Questrial-Regular'
  },
  projetoCard: {
    backgroundColor: "#e5f3e9",
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
    fontFamily:'Questrial-Regular'
  },
  projetoNome: {
    fontWeight: "bold",
    color: "#2f6d2f",
    fontSize: 16,
    fontFamily:'Questrial-Regular'
  },
  projetoDescricao: {
    color: "#4a4a4a",
    marginTop: 4,
    fontFamily:'Questrial-Regular'
  },
  botaoVoltar: {
    alignSelf: "center",
    marginBottom: 20,
    backgroundColor: "#357447",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginTop: 10,
  },
  textoVoltar: {
    color: "#fff",
    fontWeight: "bold",
    fontFamily:'Questrial-Regular'
  },

  // Footer wrapper com largura total
  footerWrapper: {
    width: '100%',
    backgroundColor: '#357447',
  },
  footer: {
    paddingVertical: 25,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  footerTitle: {fontFamily:'Questrial-Regular',fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 5 },
  footerText: {fontFamily:'Questrial-Regular',color: 'white', textAlign: 'center', marginVertical: 5, lineHeight: 20 },
  subscribe: { marginTop: 10, alignItems: 'center', width: '100%' },
  subscribeTitle: {fontFamily:'Questrial-Regular',fontSize: 16, fontWeight: 'bold', color: 'white' },
  subscribeText: {fontFamily:'Questrial-Regular', textAlign: 'center', marginVertical: 10, color: 'white', lineHeight: 20 },
  inputGroup: { flexDirection: 'row', width: '70%', alignItems: 'center' },
  inputSugestao: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
    marginTop: 15,
    marginBottom: 2,
    height: 34,
    color: 'white',
    fontFamily:'Questrial-Regular'
  },
  inputButton: {
    backgroundColor: '#255736',
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderRadius: 5,
    height: 40,
  },
  inputButtonText: {fontFamily:'Questrial-Regular', color: 'white', fontWeight: 'bold' },
  socialContainer: { flexDirection: 'row', marginTop: 10, justifyContent: 'center' },
  socialIcon: { width: 50, height: 50, marginHorizontal: 0.2 },
  footerCopyright: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
    fontFamily:'Questrial-Regular'
  },
});
