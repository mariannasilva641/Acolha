import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './JS/home';
import projetosSociais from './JS/projetosSociais';
import ajuda from './JS/ajuda';
import login from './JS/login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="projetosSociais" component={projetosSociais} />
        <Stack.Screen name="ajuda" component={ajuda} />
        <Stack.Screen name="login" component={login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
