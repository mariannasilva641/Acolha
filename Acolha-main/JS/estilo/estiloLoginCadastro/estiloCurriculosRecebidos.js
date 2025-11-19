import { StyleSheet } from "react-native";

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f0f4f7",
  },

  container: {
    padding: 20,
    paddingBottom: 40,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a2e35",
    textAlign: "center",
    marginBottom: 20,
  },

  /* CARD PRINCIPAL */
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
    elevation: 3,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1a2e35",
    marginBottom: 15,
    textAlign: "center",
  },

  /* Cada candidato */
  candidatoCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
  },

  fotoCandidato: {
    width: 90,
    height: 90,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 10,
  },

  candidatoNome: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1a2e35",
  },

  candidatoCargo: {
    fontSize: 15,
    textAlign: "center",
    color: "#4b5d67",
    marginTop: 5,
  },

  candidatoResumo: {
    marginTop: 10,
    fontSize: 14,
    textAlign: "center",
    color: "#6d7a80",
  },

  botaoCurriculo: {
    backgroundColor: "#27ae60",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
    marginTop: 15,
  },

  botaoCurriculoTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  /* Botão Voltar */
  botaoVoltar: {
    padding: 12,
    alignItems: "center",
    marginTop: 10,
  },

  textoVoltar: {
    color: "#1a2e35",
    fontSize: 16,
  },

  /* Footer */
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
  socialIcon: { width: 50, height: 40, marginHorizontal: 2 },
  errorText: { fontFamily:'Questrial-Regular', color: 'red', marginBottom: 8, fontSize: 12 },
  footerCopyright: { fontFamily:'Questrial-Regular', color: 'white', fontSize: 12, textAlign: 'center', marginTop: 5, fontWeight: 'bold' },

  inputRow: { flex: 1, marginRight: 10 },
});
