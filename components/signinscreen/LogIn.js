import React, { useState, Component } from 'react';
import {View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { Form, FormItem, Picker } from 'react-native-form-component';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import DropdownMenu from 'react-native-dropdown-menu';

//const img = {uri: 'https://www.globalgiving.org/pfil/21544/03_2_Large.jpg'};

// const Stack = createNativeStackNavigator();

// <NavigationContainer>
//   <Stack.Navigator>
//     <Stack.Screen> <Text>Hello World</Text> </Stack.Screen>
//   </Stack.Navigator>
// </NavigationContainer>

const img = {uri: 'https://www.globalgiving.org/pfil/21544/03_2_Large.jpg'};

class LogIn extends Component {
  //const [passwordVisible, setPasswordVisible] = useState(true);
  constructor(){
    super();
    this.state = {
      email: '',
      phone: '',
      date: new Date(),
    }
  }
  // this.swayam = "Smith Street, San Francisco, CA";
  // state = {
  //   email: '',
  //   password: ''
  // }
  handleEmail = (text) => {
      this.setState({ email: text })
  }
  handleNumber = (text) => {
      this.setState({ phone: text })
  }
  login = (email, pass) => {
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(!email.match(mailformat))
        alert('Please enter a valid Email address');
      else if(pass.length < 10)
        alert('Phone must be at least 10 characters long');
      else
        alert('Registration Successful');
      // else if(!(pass.length >= 8))
      //   alert('Password must be at least 8 characters long');
      // else
      //   alert('email: ' + email + ' password: ' + pass);
  }
  render() {
    return (
        <View style={styles.container}>
            <ImageBackground source={img} resizeMode="cover" style={styles.image}>
              <View style={styles.child}/>
              <KeyboardAvoidingView
                style={styles.form}
                // keyboardVerticalOffset = {Header.HEIGHT + 20} // adjust the value here if you need more padding
                behavior = "position">
                  <Text style={styles.textLogin}>Form</Text>
                  <TextInput 
                    placeholder="Agency Mail" 
                    onChangeText = {this.handleEmail}
                  />
                  {/* <TextInput
                    secureTextEntry={true}
                    placeholder="Enter Password"
                    // right={<TextInput.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
                    onChangeText = {this.handlePassword}
                  /> */}
                  <TextInput placeholder="Agency Name"/>
                  <TextInput placeholder="Brief Description" multiline/>
                  <TextInput placeholder="Registration Number"/>
                  {/* <DatePicker
                    style={{width: 200}}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2016-05-01"
                    maxDate="2016-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                      },
                      dateInput: {
                        marginLeft: 36,
                        marginDown: 10,
                      }
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                  /> */}
                  <RNDateTimePicker value={new Date()} />
                  <TextInput placeholder="Phone Number"
                  onChangeText = {this.handleNumber}/>
                  <TouchableOpacity
                    style={styles.button}
                    onPress = {
                      () => this.login(this.state.email, this.state.phone)
                    }>
                    <Text> Submit </Text>
                  </TouchableOpacity>
              </KeyboardAvoidingView>
            </ImageBackground>
        </View>
    );
  }
};

const styles = StyleSheet.create({
    container: {
      //flex: 1,
      justifyContent: "center",
    },
    image: {
      //flex: 1,
      justifyContent: "center",
      alignItems: 'center',
      //backgroundColor: 'rgba(0,0,0,0.5)',
      width: '100%',
      height: 720,
    },
    child: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      width: '100%',
      height: 850,
    },
    textLogin: {
      fontSize: 25,
      marginLeft: '40%',
      color: 'white',
    },
    form: {
      flex: 1,
      padding: '5%',
      backgroundColor: 'rgba(70,70,70,0.8)',
      position: 'absolute',
      top: 160,
      right: '10%',
      width: '80%',
      color: 'white',
    },
    button: {
      backgroundColor: '#00bfff',
      padding: '5%',
      marginTop: '5%',
      justifyContent: "center",
      alignItems: "center",
    },
});

export default LogIn;
