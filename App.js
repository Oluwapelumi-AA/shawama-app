import 'react-native-gesture-handler';
import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';


import Home from './components/Home';

const Stack = createNativeStackNavigator();

function App() {
   const [loaded] = useFonts({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.otf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.otf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.otf'),
  });

  if (!loaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
      headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
