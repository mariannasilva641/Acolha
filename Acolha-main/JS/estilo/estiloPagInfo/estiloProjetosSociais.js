import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: { flex: 1, width: '100%', height: '100%' },
  container: { alignItems: 'center', paddingVertical: 0, flexGrow: 1 },

  navbar: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#357447',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    zIndex: 10
  },
  navbarLogo: { width: 120, height: 40, resizeMode: 'contain', marginBottom: 5 },
  menuContainer: { position: 'relative' },
  fixedLinks: { flexDirection: 'row', alignItems: 'center' },
  navLink: { color: 'white', fontWeight: 'bold', fontSize: 12, fontFamily:'Questrial-Regular', marginHorizontal: 8 },

  dropdownMenu: {
    position: 'absolute',
    top: 25,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    zIndex: 1000,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  dropdownItem: { paddingVertical: 6, fontSize: 14, color: '#357447', fontWeight: '600', fontFamily:'Questrial-Regular', width:95 },

  // ------------------ CARDS ------------------
  card: {
    width: '70%',
    backgroundColor: '#3B6D49',
    borderRadius: 12,
    padding: 20,
    marginVertical: 35,
    alignItems: 'center',

    // Sombra padrão
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 6,
    elevation: 5,

    // Para web: transição suave ao hover
    transitionProperty: 'all',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease-out',
  },
  cardHover: {
    // Sombra mais intensa no hover
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    elevation: 10,
  },
  cardImage: { width: '100%', height: 180, borderRadius: 12, marginBottom: 12 },
  cardTitle: { fontFamily:'Questrial-Regular', fontSize: 20, fontWeight: 'bold', marginBottom: 15, color: 'white', textAlign: 'center' },
  cardText: { fontFamily:'Questrial-Regular', textAlign: 'justify', marginBottom: 18, color: 'white', lineHeight: 20 },
  cardButton: { borderWidth: 1, borderColor: 'white', borderRadius: 8, paddingVertical: 8, paddingHorizontal: 20 },
  cardButtonText: { color: 'white', fontWeight: 'bold', fontFamily:'Questrial-Regular' },

  footer: { alignItems: 'center', paddingVertical: 20, width: '100%', backgroundColor: '#357447' },
  footerTitle: { fontFamily:'Questrial-Regular', fontSize: 18, fontWeight: 'bold', color: 'white' },
  footerText: { fontFamily:'Questrial-Regular', textAlign: 'center', marginVertical: 5, color: 'white' },

  subscribe: { marginTop: 10, alignItems: 'center', width: '90%' },
  subscribeTitle: { fontSize: 16, fontWeight: 'bold', color: 'white' },
  subscribeText: { fontFamily:'Questrial-Regular', textAlign: 'center', marginVertical: 10, color: 'white', lineHeight: 20 },
  inputGroup: { flexDirection: 'row', marginTop: 15, marginBottom: 1, width: '70%' },
  input: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
    color: 'white',
    height: 34,
    fontFamily:'Questrial-Regular',
  },
  inputButton: { backgroundColor: '#255736', paddingHorizontal: 15, justifyContent: 'center', borderRadius: 5 },
  inputButtonText: { color: 'white', fontWeight: 'bold' },

  socialContainer: { flexDirection: 'row', marginTop: 10, justifyContent: 'center' },
  socialIcon: { width: 50, height: 40, marginHorizontal:0.2, borderRadius: 10 },
  footerCopyright: { color: 'white', fontSize: 12, textAlign: 'center', marginTop: 5, fontWeight: 'bold' },
});
