import { View, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { Form, FormItem } from 'react-native-form-component';

const img = {uri: 'https://www.annauniv.edu/cai/images/anna3.jpg'};

const Cgpa = () => {
  return (
    <View>
      <View style={styles.container}>
            <ImageBackground source={img} resizeMode="cover" style={styles.image}>
                <View style={styles.child}/>
                <KeyboardAvoidingView
                    style={styles.form}
                    behavior = "position">
                        <Text style={styles.textLogin}>Form</Text>
                        <TextInput keyboardType="numeric" placeholder="Content Technologies"/>
                        <TextInput keyboardType="numeric" placeholder="Maths"/>
                        <TextInput keyboardType="numeric" placeholder="Data Structures"/>
                        <TextInput keyboardType="numeric" placeholder="Python"/>
                        <TextInput keyboardType="numeric" placeholder="Network"/>
                        <TextInput keyboardType="numeric" placeholder="Researh Methodology"/>
                        <TextInput keyboardType="numeric" placeholder="DSA Lab"/>
                        <TextInput keyboardType="numeric" placeholder="Python Lab"/>
                        <TouchableOpacity style={styles.button}>
                            <Text> Submit </Text>
                        </TouchableOpacity>
                </KeyboardAvoidingView>
            </ImageBackground>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      //flex: 1,
      justifyContent: "center",
    },
    image: {
      justifyContent: "center",
      alignItems: 'center',
      width: '100%',
      height: 750,
    },
    child: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      width: 500,
      height: 750,
    },
    textLogin: {
      fontSize: 20,
      marginLeft: '40%',
      color: 'white',
    },
    form: {
      flex: 1,
      padding: '5%',
      backgroundColor: 'rgba(70,70,70,0.8)',
      position: 'absolute',
      top: '15%',
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


export default Cgpa