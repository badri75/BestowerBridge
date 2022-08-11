import React, { useState, Component } from 'react';
import {View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { Form, FormItem } from 'react-native-form-component'

//const img = {uri: 'https://www.globalgiving.org/pfil/21544/03_2_Large.jpg'};

const img = {uri: 'https://www.globalgiving.org/pfil/21544/03_2_Large.jpg'};

class LogIn extends Component {
  //const [passwordVisible, setPasswordVisible] = useState(true);
  constructor({navigation}) {
    super();
    this.state = {
      email: '',
      password: '',
      agencyname: '',
      address: '',
      pin: '',
      phone: '',
      area: '',
      navigation: navigation,
    }
  }
  
  handleEmail = (text) => {
      this.setState({ email: text })
  }
  handlePassword = (text) => {
      this.setState({ password: text })
  }
  handleAgencyName = (text) => {
      this.setState({ agencyname: text })
  }
  handleAddress = (text) => {
      this.setState({ address: text })
  }
  handleArea = (text) => {
      this.setState({ area: text })
  }
  handlePin = (text) => {
      this.setState({ pin: text })
  }
  handlePhone = (text) => {
      this.setState({ phone: text })
  }

  login = () => {
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(!this.state.email.match(mailformat))
        alert('Please enter a valid Email address');
      else if(!(this.state.password.length >= 8))
        alert('Password must be at least 8 characters long');
      else if((this.state.pin.length != 6) && (parseInt(Math.trunc(this.state.pin/100000)) != 6))
        alert('Pincode doesn\'t belong to TN');
      else if(!(this.state.phone.length == 10))
        alert('Phone number must be 10 digits long');
      else{
        this.state.navigation.navigate('Form Continued', {
          email: this.state.email,
          name: this.state.agencyname,
          phone: this.state.phone,
        });
      }
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
                  <Text style={styles.textLogin}>Register your NGO</Text>
                  <TextInput placeholder="Enter Email" onChangeText = {this.handleEmail} autoCapitalize={"none"}/>
                  <TextInput
                    secureTextEntry={true}
                    placeholder="Enter Password"
                    // right={<TextInput.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
                    onChangeText = {this.handlePassword}
                  />
                  <TextInput placeholder="Agency Name" onChangeText = {this.handleAgencyName}/>
                  <TextInput placeholder="Address" multiline onChangeText = {this.handleAddress}/>
                  <TextInput placeholder="Area" onChangeText = {this.handleArea}/>
                  <TextInput placeholder="Pincode" onChangeText = {this.handlePin} keyboardType="numeric" />
                  <TextInput placeholder="Phone Number" onChangeText = {this.handlePhone} keyboardType="numeric" />
                  <TouchableOpacity
                    style={styles.button}
                    onPress = {
                      () => this.login()
                    }>
                    <Text> Next </Text>
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
      height: '100%',
    },
    child: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      width: 500,
      height: 750,
    },
    textLogin: {
      fontSize: 20,
      marginLeft: '17%',
      color: '#AA4A44',
      // justifyContent: "center",
      // alignItems: "center",
    },
    form: {
      flex: 1,
      padding: '5%',
      backgroundColor: 'rgba(70,70,70,0.8)',
      position: 'absolute',
      // top: 100,
      // right: '10%',
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

export default LogIn;
