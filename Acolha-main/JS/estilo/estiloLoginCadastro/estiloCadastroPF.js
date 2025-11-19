import { StyleSheet } from "react-native";

export default StyleSheet.create({
     safeArea: { flex: 1, backgroundColor: "#E5E5E5" },
  scrollContainer: { 
    alignItems: 'center', 
    flexGrow: 1,            
    justifyContent: 'space-between',  
  },
  content: { width: '100%', alignItems: 'center' },
  titulo: { fontFamily:'Questrial-Regular',fontSize: 24, fontWeight: "bold", color: "#357447", marginVertical: 20, textAlign: "center" },
  card: { width: "90%", backgroundColor: "white", padding: 20, borderRadius: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 5, elevation: 5 },
  input: { fontFamily:'Questrial-Regular',borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10, marginVertical: 8, backgroundColor: '#fff' },
  botao: { backgroundColor: "#357447", padding: 15, borderRadius: 8, marginTop: 15, alignItems: "center" },
  botaoTexto: { fontFamily:'Questrial-Regular',color: "white", fontWeight: "bold" },
 botaoVoltar: {marginBottom: 10, marginTop: 20, backgroundColor: '#357447', paddingVertical: 8, paddingHorizontal: 12,borderRadius: 6,alignItems: 'center', alignSelf: 'center',  },
  textoVoltar: { fontFamily:'Questrial-Regular',color: '#fff', fontWeight: 'bold' },
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
  inputSugestao: {fontFamily:'Questrial-Regular', backgroundColor: 'transparent', borderWidth: 1, borderColor: 'white', padding: 10, borderRadius: 5, flex: 1, marginRight: 5, marginTop:2, marginBottom:15, height: 34, color: 'white' },
  inputButton: { backgroundColor: '#255736', paddingHorizontal: 15, justifyContent: 'center', borderRadius: 5, height: 41 },
  inputButtonText: { color: 'white', fontWeight: 'bold' },
  socialContainer: { flexDirection: 'row', marginTop: 2, justifyContent: 'center' },
  socialIcon: { width: 50, height: 40, marginHorizontal: 0.2 },
  errorText: { fontFamily:'Questrial-Regular',color: 'red', marginBottom: 8, fontSize: 12 },
  footerCopyright: { fontFamily:'Questrial-Regular',color: 'white', fontSize: 12, textAlign: 'center', marginTop: 5, fontWeight: 'bold' },
  backgroundImage: { flex: 1, width: '100%', height: '100%' },
});
