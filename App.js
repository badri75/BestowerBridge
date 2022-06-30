// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, Component } from 'react';
import {View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Form, FormItem } from 'react-native-form-component';
//import LogIn from './components/signinscreen/LogIn';

// const Stack = createNativeStackNavigator();

// <NavigationContainer>
//   <Stack.Navigator>
//     <Stack.Screen> <Text>Hello World</Text> </Stack.Screen>
//   </Stack.Navigator>
// </NavigationContainer>

const img = {uri: 'https://www.globalgiving.org/pfil/21544/03_2_Large.jpg'};

class App extends Component {
  //const [passwordVisible, setPasswordVisible] = useState(true);
  state = {
    email: '',
    password: ''
  }
  handleEmail = (text) => {
      this.setState({ email: text })
  }
  handlePassword = (text) => {
      this.setState({ password: text })
  }
  login = (email, pass) => {
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(!email.match(mailformat))
        alert('Please enter a valid Email address');
      else if(!(pass.length >= 8))
        alert('Password must be at least 8 characters long');
      else
        alert('email: ' + email + ' password: ' + pass);
  }
  render() {
    return (
        <View style={styles.container}>
            <ImageBackground source={img} resizeMode="cover" style={styles.image}>
              <View style={styles.child}/>
              <View style={styles.form}>
                <Text style={styles.textLogin}>LogIn</Text>
                <TextInput placeholder="Enter Email" onChangeText = {this.handleEmail}/>
                <TextInput
                  secureTextEntry={true}
                  placeholder="Enter Password"
                  // right={<TextInput.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
                  onChangeText = {this.handlePassword}
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress = {
                    () => this.login(this.state.email, this.state.password)
                  }>
                  <Text> Submit </Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
        </View>
    );
  }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    child: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)'
    },
    textLogin: {
      fontSize: 20,
      marginLeft: '40%',
    },
    form: {
      padding: '5%',
      backgroundColor: 'rgba(70,70,70,0.8)',
      position: 'absolute',
      right: '10%',
      width: '80%',
    },
    button: {
      backgroundColor: '#00bfff',
      padding: '5%',
      marginTop: '5%',
      justifyContent: "center",
      alignItems: "center",
    },
});

export default App;

// export default function App() {
//   return (
//     <View>
//       <LogIn />
//     </View>
//   );
// }