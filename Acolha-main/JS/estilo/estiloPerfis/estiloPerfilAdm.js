import { StyleSheet, Dimensions } from "react-native";

// Captura largura e altura da tela
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const isTablet = SCREEN_WIDTH >= 768;

export default StyleSheet.create({
  background: { flex: 1, width: "100%", paddingTop: 20 },
  
  scrollContent: {
    flexGrow: 1,
    justifyContent: "space-between",
    minHeight: SCREEN_HEIGHT,
  },

  contentContainer: {
    width: "100%",
    maxWidth: 700,
    alignSelf: "center",
    paddingHorizontal: isTablet ? 40 : 20,
  },

  title: {
    fontSize: isTablet ? 28 : 22,
    fontWeight: "bold",
    color: "#255736",
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Questrial-Regular",
    backgroundColor: "#fff",
  },

  card: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: isTablet ? 25 : 15,
    marginBottom: 20,
    alignSelf: "center",
    width: "95%",
    maxWidth: 700,
  },

  sectionTitle: {
    fontSize: isTablet ? 20 : 16,
    fontWeight: "bold",
    color: "#357447",
    marginBottom: 10,
    fontFamily: "Questrial-Regular",
  },

  infoItem: {
    fontSize: isTablet ? 16 : 14,
    marginBottom: 6,
    fontFamily: "Questrial-Regular",
  },

  button: {
    backgroundColor: "#357447",
    paddingVertical: isTablet ? 14 : 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: isTablet ? 16 : 14,
    fontFamily: "Questrial-Regular",
  },

  subCard: {
    backgroundColor: "#f0f0f0",
    padding: isTablet ? 15 : 10,
    borderRadius: 8,
    marginBottom: 10,
  },

  projectTitle: {
    fontWeight: "bold",
    color: "#255736",
    marginBottom: 5,
    fontSize: isTablet ? 18 : 14,
    fontFamily: "Questrial-Regular",
  },

  smallButton: {
    backgroundColor: "#357447",
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 6,
    marginTop: 8,
    alignSelf: "flex-start",
  },

  smallButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },

  actionRow: { flexDirection: "row", gap: 10, marginTop: 6 },

  backButton: {
    backgroundColor: "#255736",
    padding: isTablet ? 14 : 10,
    borderRadius: 8,
    marginTop: 25,
    width: "80%",
    maxWidth: 400,
    alignItems: "center",
    alignSelf: "center",
  },

  backButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: isTablet ? 18 : 16,
    fontFamily: "Questrial-Regular",
  },

  footerWrapper: {
    width: "100%",
    backgroundColor: "#357447",
    paddingVertical: isTablet ? 35 : 25,
    marginTop: 60,
  },

  footer: {
    paddingHorizontal: 20,
    alignItems: "center",
    maxWidth: 600,
    alignSelf: "center",
  },

  footerTitle: {
    fontSize: isTablet ? 20 : 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
    fontFamily: "Questrial-Regular",
  },

  footerText: {
    color: "white",
    textAlign: "center",
    marginVertical: 5,
    lineHeight: 22,
    fontSize: isTablet ? 16 : 14,
    fontFamily: "Questrial-Regular",
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },

  socialIcon: { width: 50, height: 50, marginHorizontal: 5 },

  footerCopyright: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
    marginTop: 8,
    fontWeight: "bold",
    fontFamily: "Questrial-Regular",
  },
});
