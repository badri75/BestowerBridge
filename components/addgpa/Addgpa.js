import { View, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Text, ScrollView, } from 'react-native'
import React, {useState} from 'react'
import { Form, FormItem } from 'react-native-form-component';

const img = {uri: 'https://www.annauniv.edu/cai/images/anna3.jpg'};

const Input = () => {
  return(
    <View>
      <Text style={{color:'#AA4A44'}}>Subject</Text>
      <View style={styles.parent}>
        <TextInput keyboardType="numeric" placeholder="Internals" style={styles.left}/>
        <TextInput keyboardType="numeric" placeholder="Externals " style={styles.right}/>
      </View>
    </View>
  );
};

function Addgpa({navigation}) {
  const [inputList, setInputList] = useState([]);
  const [def,setDef] = useState();

  const onAddBtnClick = event => {
    setInputList(inputList.concat(<Input key={inputList.length} />));
    setDef(20);
    //console.log(def);
  };

  const navigate = () => {
    navigation.navigate('List', {
      gpa: 10,
    });
  }

  return (
    <View>
      <View style={styles.container}>
        <ScrollView>
        <ImageBackground source={img} resizeMode="cover" style={styles.image}>
          <View style={styles.child}/>
          <ScrollView style={styles.form}>
            <Text style={styles.textLogin}>GPA Calculation</Text>
            <View>
              {inputList}
              <TouchableOpacity  style={styles.button}  onPress={onAddBtnClick}>
                <Text>Add input</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={navigate}>
                <Text>Calculate</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
        </ScrollView>
      </View>
    </View>
    );
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
    height: '100%',
  },
  child: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: 500,
    height: 750,
  },
  parent: {
    flexDirection:'row',
  },
  left: {
    flex: 1,
  },
  right: {
    flex:1,
  },
  textLogin: {
    fontSize: 20,
    textAlign: 'center',
    color: '#62BD69',
    marginBottom: 15,
  },
  form: {
    flex: 1,
    padding: '5%',
    backgroundColor: 'rgba(70,70,70,0.8)',
    position: 'absolute',
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

export default Addgpa