// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, Component } from 'react';
import {View,} from 'react-native';
// import { Form, FormItem } from 'react-native-form-component';
import LogIn from './components/signinscreen/LogIn';



export default function App() {
  return (
    <View>
      {/* <Text style={{color: 'black',padding: 80}}>Hello World</Text> */}
      <LogIn />
    </View>
  );
}