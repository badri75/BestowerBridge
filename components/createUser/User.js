import React, { useState, Component } from 'react';
import {View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { Form, FormItem } from 'react-native-form-component'
import { Dropdown } from 'react-native-element-dropdown';
import RadioButtonRN from 'radio-buttons-react-native';
import DatePicker from 'react-native-date-picker'

//const img = {uri: 'https://www.globalgiving.org/pfil/21544/03_2_Large.jpg'};

const img = {uri: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'};

const city = [
  { label: 'Chennai', value: 'Chennai' },
  { label: 'Thiruvallur', value: 'Thiruvallur' },
  { label: 'Kanchipuram', value: 'Kanchipuram' },
  { label: 'Chengalpet', value: 'Chengalpet' },
  { label: 'Coimbatore', value: 'Coimbatore' },
  { label: 'Madurai', value: 'Madurai' },
];

const gender = [
  { label: 'Male'},
  { label: 'Female'},
  ];
  

class User extends Component {
  //const [passwordVisible, setPasswordVisible] = useState(true);
  constructor({navigation}) {
    super();
    this.state = {
      email: '',
      password: '',
      cnfpassword: '',
      agencyname: '',
      address: '',
      pin: '',
      phone: '',
      area: '',
      date: new Date(),
      navigation: navigation,
    }
  }
  
  handleEmail = (text) => {
      this.setState({ email: text })
  }
  handlePassword = (text) => {
      this.setState({ password: text })
  }
  handleCnfPassword = (text) => {
      this.setState({ cnfpassword: text })
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
    var passformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(!this.state.email.match(mailformat))
      alert('Please enter a valid Email address');
    else if(!this.state.password.match(passformat))
      alert('Password must contain 1 special character, 1 uppercase, 1 lowercase, 1 number and must be 6-20 characters long');
    else if((this.state.pin.length != 6) && (parseInt(Math.trunc(this.state.pin/100000)) != 6))
      alert('Pincode doesn\'t belong to TN');
    else if(!(this.state.phone.length == 10))
      alert('Phone number must be 10 digits long');
    else if(!(this.state.password == this.state.cnfpassword))
      alert('Passwords do not match');
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
                  <Text style={styles.textLogin}>Signup Page</Text>
                  <TextInput placeholder="Enter Email" onChangeText = {this.handleEmail} autoCapitalize={"none"}/>
                  <TextInput
                    secureTextEntry={true}
                    placeholder="Enter Password"
                    // right={<TextInput.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
                    onChangeText = {this.handlePassword}
                  />
                  <TextInput
                    secureTextEntry={true}
                    placeholder="Confirm Password"
                    // right={<TextInput.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
                    onChangeText = {this.handleCnfPassword}
                  />
                  <TextInput placeholder="Name" onChangeText = {this.handleAgencyName}/>
                  <RadioButtonRN
                    data={gender}
                    box={false}
                    circleSize={5}
                    textColor={'white'}
                  />
                  <TextInput placeholder="Address" multiline onChangeText = {this.handleAddress}/>
                  <Dropdown
                    data={city}
                    label='All Dates'
                    itemTextStyle={{backgroundColor:"blue",textColor:"white"}}
                    textColor="#FFF"
                    placeholder="Select Area"
                    onChange = {this.handleArea}
                    // style={styles.dropdown}
                    // placeholderStyle={styles.placeholderStyle}
                    // selectedTextStyle={styles.selectedTextStyle}
                    // inputSearchStyle={styles.inputSearchStyle}
                    baseColor="black"
                  />
                  {/* <DatePicker 
                    modal
                    open={true}
                    date={this.date}/> */}
                  <TextInput placeholder="Pincode" onChangeText = {this.handlePin} keyboardType="numeric" />
                  <TextInput placeholder="Phone Number" onChangeText = {this.handlePhone} keyboardType="numeric" />
                  <TouchableOpacity
                    style={styles.button}
                    onPress = {
                      () => this.login()
                    }>
                    <Text> Submit </Text>
                  </TouchableOpacity>
                  {/* <TouchableOpacity style={styles.newUserStyle} onPress={this.newUser}>
                    <Text style={{color:'#00bfff', textDecorationLine: 'underline'}}>New User? Create Account</Text>
                  </TouchableOpacity> */}
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
    form: {
      flex: 1,
      padding: '5%',
      backgroundColor: 'rgba(70,70,70,0.8)',
      position: 'absolute',
      // top: 100,
      // right: '10%',
      width: '80%',
    },
    textLogin: {
      fontSize: 20,
      marginLeft: '30%',
      color: '#AA4A44',
      // justifyContent: "center",
      // alignItems: "center",
    },
    dropdown: {
      height: 50,
      backgroundColor: 'transparent',
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
      color: 'black'
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    placeholderStyle: {
      color: 'red',
      fontSize: 16,
    },
    button: {
      backgroundColor: '#00bfff',
      padding: '5%',
      marginTop: '5%',
      justifyContent: "center",
      alignItems: "center",
    },
    newUserStyle: {
      marginTop: '5%',
      justifyContent: "center",
      alignItems: "center",
    },
});

export default User;
