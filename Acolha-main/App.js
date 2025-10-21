import React from 'react';
import { Text } from 'react-native'; // Importar Text para os ícones dos toasts
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

// Importando todas as telas
import home from './JS/home';
import login from './JS/login';
import ajuda from './JS/ajuda';
import projetosSociais from './JS/projetosSociais';
import cadastroPF from './JS/cadastroPF';
import cadastroPJ from './JS/cadastroPJ';
import sobreNos from './JS/sobreNos';
import perfilPF from './JS/perfilPF';
import perfilPJ from './JS/perfilPJ';
import editarPerfilPJ from './JS/editarPerfilPJ';
import editarPerfilPF from './JS/editarPerfilPF';

const Stack = createNativeStackNavigator();

// ⚡ Estilos personalizados dos toasts
export const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#28a745', backgroundColor: '#28a745' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}
      text2Style={{ fontSize: 14, color: '#fff' }}
      renderLeadingIcon={() => <Text style={{ fontSize: 18 }}>✅</Text>}
      text1NumberOfLines={2}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: '#dc3545', backgroundColor: '#dc3545' }}
      text1Style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}
      text2Style={{ fontSize: 14, color: '#fff' }}
      renderLeadingIcon={() => <Text style={{ fontSize: 18 }}>❌</Text>}
      text1NumberOfLines={2}
    />
  ),
};

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="home" component={home} />
          <Stack.Screen name="Login" component={login} />
          <Stack.Screen name="ajuda" component={ajuda} />
          <Stack.Screen name="projetosSociais" component={projetosSociais} />
          <Stack.Screen name="cadastroPF" component={cadastroPF} />
          <Stack.Screen name="cadastroPJ" component={cadastroPJ} />
          <Stack.Screen name="perfilPF" component={perfilPF} />
          <Stack.Screen name="perfilPJ" component={perfilPJ} />
          <Stack.Screen name="sobreNos" component={sobreNos} />
          <Stack.Screen name="editarPerfilPJ" component={editarPerfilPJ} />
          <Stack.Screen name="editarPerfilPF" component={editarPerfilPF} />
        </Stack.Navigator>
      </NavigationContainer>

      {/* Toast Global */}
      <Toast config={toastConfig} />
    </>
  );
}
