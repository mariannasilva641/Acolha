import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

// Telas
import Home from './JS/home';
import Login from './JS/login';
import Ajuda from './JS/ajuda';
import ProjetosSociais from './JS/projetosSociais';
import CadastroPF from './JS/cadastroPF';
import CadastroPJ from './JS/cadastroPJ';
import SobreNos from './JS/sobreNos';
import PerfilPF from './JS/perfilPF';
import PerfilPJ from './JS/perfilPJ';
import EditarPerfilPJ from './JS/editarPerfilPJ';
import EditarPerfilPF from './JS/editarPerfilPF';

// Toast personalizado
const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#28a745', backgroundColor: '#28a745' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}
      text2Style={{ fontSize: 14, color: '#fff' }}
      renderLeadingIcon={() => <Text style={{ fontSize: 18 }}>✅</Text>}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: '#dc3545', backgroundColor: '#dc3545' }}
      text1Style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}
      text2Style={{ fontSize: 14, color: '#fff' }}
      renderLeadingIcon={() => <Text style={{ fontSize: 18 }}>❌</Text>}
    />
  ),
};

const Stack = createNativeStackNavigator();

export default function App() {
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
        </Stack.Navigator>
      </NavigationContainer>

      {/* Toast Global com config personalizado */}
      <Toast config={toastConfig} />
    </>
  );
}
