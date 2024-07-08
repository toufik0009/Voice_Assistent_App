import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import HomePage from '../screens/HomePage';

const Stack = createNativeStackNavigator();


function AppNavigation() {
  return ( 
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Home" options={{headerShown:false}} component={HomePage} />
        <Stack.Screen name="Welcome" options={{headerShown:false}} component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;