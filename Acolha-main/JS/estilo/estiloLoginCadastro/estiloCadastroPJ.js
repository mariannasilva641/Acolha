import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#E5E5E5" },
  backgroundImage: { flex: 1, width: '100%', height: '100%' },

  contentWrapper: {
    flexGrow: 1,
    paddingHorizontal: 0,
    alignItems: 'center',
  },

  titulo: { fontSize: 24, fontWeight: "bold", color: "#357447", marginVertical: 20, textAlign: "center" },

  card: { 
    width: '95%',
    backgroundColor: "#fff", 
    borderRadius: 10, 
    padding: 15, 
    marginBottom: 20,
    alignSelf: 'center',
  },

  input: { 
    borderWidth: 1, 
    borderColor: "#357447", 
    borderRadius: 5, 
    padding: 10, 
    marginBottom: 8, 
    color: 'black', 
    minWidth: 0,
  },

  row: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    marginBottom: 8 
  },

  botao: { backgroundColor: "#357447", borderRadius: 5, padding: 15, marginTop: 10, alignItems: "center" },
  botaoTexto: { color: "white", fontWeight: "bold" },
  botaoVoltar: { marginTop: 10, alignItems: "center" },
  textoVoltar: { color: "#357447" },

  footer: { 
    width: '100%', 
    backgroundColor: '#357447', 
    alignItems: 'center', 
    paddingVertical: 25,
    marginTop:40
  },
  footerTitle: { fontFamily:'Questrial-Regular',fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 5 },
  footerText: { fontFamily:'Questrial-Regular',color: 'white', textAlign: 'center', marginVertical: 5, lineHeight: 20 },
  subscribe: { marginTop: 10, alignItems: 'center', width: '90%' },
  subscribeTitle: { fontFamily:'Questrial-Regular',fontSize: 16, fontWeight: 'bold', color: 'white' },
  subscribeText: { fontFamily:'Questrial-Regular',textAlign: 'center', marginVertical: 10, color: 'white', lineHeight: 20 },
  inputGroup: { flexDirection: 'row', width: '70%', alignItems: 'center' },
  inputSugestao: { fontFamily:'Questrial-Regular', backgroundColor: 'transparent', borderWidth: 1, borderColor: 'white', padding: 10, borderRadius: 5, flex: 1, marginRight: 5, marginTop:2, marginBottom:15, height: 40, color: 'white' },
  inputButton: { backgroundColor: '#255736', paddingHorizontal: 15, justifyContent: 'center', borderRadius: 5, height: 41 },
  inputButtonText: { color: 'white', fontWeight: 'bold' },
  socialContainer: { flexDirection: 'row', marginTop: 2, justifyContent: 'center' },
  socialIcon: { width: 50, height: 50, marginHorizontal: 2 },
  errorText: { fontFamily:'Questrial-Regular', color: 'red', marginBottom: 8, fontSize: 12 },
  footerCopyright: { fontFamily:'Questrial-Regular', color: 'white', fontSize: 12, textAlign: 'center', marginTop: 5, fontWeight: 'bold' },

  inputRow: { flex: 1, marginRight: 10 },
});
