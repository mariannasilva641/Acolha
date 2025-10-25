import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

// Telas
import Home from './JS/pagInfo/home';
import Login from './JS/login_cadastro/login';
import Ajuda from './JS/pagInfo/ajuda';
import ProjetosSociais from './JS/pagInfo/projetosSociais';
import CadastroPF from './JS/login_cadastro/cadastroPF';
import CadastroPJ from './JS/login_cadastro/cadastroPJ';
import SobreNos from './JS/pagInfo/sobreNos';
import PerfilPF from './JS/perfis/perfilPF';
import PerfilPJ from './JS/perfis/perfilPJ';
import EditarPerfilPJ from './JS/edicaoPerfis/editarPerfilPJ';
import EditarPerfilPF from './JS/edicaoPerfis/editarPerfilPF';
import PerfilAdm from './JS/perfis/perfilAdm';

// Toast personalizado
const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#28a745', backgroundColor: '#28a745' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{ fontFamily: 'Questrial-Regular', fontSize: 16, fontWeight: 'bold', color: '#fff' }}
      text2Style={{ fontFamily: 'Questrial-Regular', fontSize: 14, color: '#fff' }}
      renderLeadingIcon={() => <Text style={{ fontSize: 18 }}>✅</Text>}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: '#dc3545', backgroundColor: '#dc3545' }}
      text1Style={{ fontFamily: 'Questrial-Regular', fontSize: 16, fontWeight: 'bold', color: '#fff' }}
      text2Style={{ fontFamily: 'Questrial-Regular', fontSize: 14, color: '#fff' }}
      renderLeadingIcon={() => <Text style={{ fontSize: 18 }}>❌</Text>}
    />
  ),
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Carregar fontes
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Questrial-Regular': require('./assets/fonts/Questrial-Regular.ttf'),
        'PTSerif-Regular': require('./assets/fonts/PTSerif-Regular.ttf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ajuda" component={Ajuda} />
          <Stack.Screen name="projetosSociais" component={ProjetosSociais} />
          <Stack.Screen name="cadastroPF" component={CadastroPF} />
          <Stack.Screen name="cadastroPJ" component={CadastroPJ} />
          <Stack.Screen name="perfilPF" component={PerfilPF} />
          <Stack.Screen name="perfilPJ" component={PerfilPJ} />
          <Stack.Screen name="sobreNos" component={SobreNos} />
          <Stack.Screen name="editarPerfilPJ" component={EditarPerfilPJ} />
          <Stack.Screen name="editarPerfilPF" component={EditarPerfilPF} />
          <Stack.Screen name="perfilAdm" component={PerfilAdm} />
        </Stack.Navigator>
      </NavigationContainer>

      <Toast config={toastConfig} />
    </>
  );
}
