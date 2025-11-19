import { StyleSheet } from "react-native";

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },

  container: {
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
    color: "#357447",
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 12,
    color: "#357447",
  },

  input: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    marginTop: 6,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },

  textarea: {
    height: 120,
    textAlignVertical: "top",
  },

  botaoSalvar: {
    backgroundColor: "#357447",
    paddingVertical: 15,
    marginTop: 30,
    borderRadius: 12,
    alignItems: "center",
    elevation: 3,
  },

  textoBotao: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },

  botaoVoltar: {
    marginTop: 18,
    alignSelf: "center",
  },

  textoVoltar: {
    color: "#357447",
    fontWeight: "bold",
    fontSize: 16,
  },
  
});
