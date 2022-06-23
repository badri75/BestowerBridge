// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import DisImage from './components/login';

// const Stack = createNativeStackNavigator();

// <NavigationContainer>
//   <Stack.Navigator>
//     <Stack.Screen> <Text>Hello World</Text> </Stack.Screen>
//   </Stack.Navigator>
// </NavigationContainer>

export default function App() {
  return (
    <View>
      <Text>Hello World</Text>
      <DisImage />
    </View>
  );
}