import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Str1 from './str/str1';
import Str2 from './str/str2';
import Str3 from './str/str3';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Str1" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Str1" component={Str1} />
      <Stack.Screen name="Str2" component={Str2} />
      <Stack.Screen name="Str3" component={Str3} />
      </Stack.Navigator>
  );
}

export default function App() {
  return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
  );
}