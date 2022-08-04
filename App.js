// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, Component } from 'react';
import {View,} from 'react-native';
// import { Form, FormItem } from 'react-native-form-component';
// import LogIn from './components/signinscreen/LogIn';
import Cgpa from './components/cgpa/Cgpa';
import Addgpa from './components/addgpa/Addgpa';
import Disp from './components/disp/Disp';
//import {Addgpa, Cgpa, Disp} from './components/';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      live: false,
      gpa : 0,
    }
  }


  isLive = (gpa) => {
    
    this.setState({
      gpa,
    });
    
    console.log(this.state.gpa);

    this.setState({
      live: true,
    });
  }
  isLive1 = () => {
    this.setState({ 
      live: false,  
    })
  }

  render(){

    return (
      <View>
        {/* <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Addgpa} />
        </Stack.Navigator>
        </NavigationContainer> */}
        {/* <Text style={{color: 'black',padding: 80}}>Hello World</Text>
          <Cgpa />
          <Addgpa /> */}
          {this.state.live ?
           <Disp 
              isLive1 = {this.isLive1}
              gpa = {this.gpa}
            /> :
            <Addgpa
             isLive = {this.isLive}
              gpa = {this.gpa}
            />}
      </View>
    );    
  }
}