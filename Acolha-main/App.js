// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
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
        


      </Stack.Navigator>
    </NavigationContainer>
  );
}
