import { View, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Text, ScrollView, Alert } from 'react-native'
import React, {useState} from 'react'
import { Form, FormItem } from 'react-native-form-component';

const img = {uri: 'https://www.annauniv.edu/cai/images/anna3.jpg'};

const Cgpa = ({navigation}) => {
  const [mark, setMark] = useState({
    cti: 0, cte: 0, mati: 0, mate: 0, dsi: 0, dse: 0, pyi: 0, pye: 0, 
    nwi: 0, nwe: 0, rmi: 0, rme: 0, dsli: 0, dsle: 0, pyli: 0, pyle: 0,
  });

  function checkRange(mark,max){
    if(mark > max){
      alert("Maximum marks is "+max);
      return false;
    }
    // else if((max > 45) && (mark < 45)){
    //   alert("You are not eligible for result");
    //   return false;
    // }
    else
      return true;
  }

  function updateMark(value) {
    return setMark((prev) => {
        return { ...prev, ...value };
    });
  }

  function calcGrade(mark){
    if(mark >= 90)
      return 10;
    else if(mark >= 80)
      return 9;
    else if(mark >= 70)
      return 8;
    else if(mark >= 60)
      return 7;
    else if(mark >= 50)
      return 6;
  }

  function calculateGPA() {
    // alert(parseInt(mark.cti) + parseInt(mark.cte));
    let gpa = (calcGrade(parseInt(mark.cti) + parseInt(mark.cte*0.5)) * 4)
     + (calcGrade(parseInt(mark.mati) + parseInt(mark.mate*0.6)) * 4)
     + (calcGrade(parseInt(mark.dsi) + parseInt(mark.dse*0.6)) * 3)
     + (calcGrade(parseInt(mark.pyi) + parseInt(mark.pye*0.6)) * 3)
     + (calcGrade(parseInt(mark.nwi) + parseInt(mark.nwe*0.6)) * 3)
     + (calcGrade(parseInt(mark.rmi) + parseInt(mark.rme*0.6)) *2)
     + (calcGrade(parseInt(mark.dsli) + parseInt(mark.dsle)) * 2)
     + (calcGrade(parseInt(mark.pyli) + parseInt(mark.pyle)) * 2);
    alert("Your GPA is "+gpa/23);
    gpa = (gpa/23).toFixed(2);
    Alert.alert(  
      'Your First Semester GPA', gpa, [{
        text: 'OK', onPress: () => {
          navigation.navigate('Sem 2', {
            gpa1: gpa,
          });
        }},  
      ]  
    );  
  }

  return (
    <View>
      <View style={styles.container}>
        <ScrollView>
          <ImageBackground source={img} resizeMode="cover" style={styles.image}>
            <View style={styles.child}/>
            <View style={styles.form}>
              <Text style={styles.textLogin}>GPA Calculation</Text>
              <Text style={{color:'#AA4A44'}}>Content Technology</Text>
              <View style={styles.parent}>
                <TextInput keyboardType="numeric" placeholder="Internals" style={styles.left} onChangeText={(e) => {if(checkRange(e,50)) updateMark({cti: e})}}/>
                <TextInput keyboardType="numeric" placeholder="Externals " style={styles.right}  onChangeText={(e) => {if(checkRange(e,100)) updateMark({cte: e})}}/>
              </View>
              <Text style={{color:'#AA4A44'}}>Mathematics</Text>
              <View style={styles.parent}>
                <TextInput keyboardType="numeric" placeholder="Internals" style={styles.left}  onChangeText={(e) => {if(checkRange(e,40)) updateMark({mati: e})}}/>
                <TextInput keyboardType="numeric" placeholder="Externals " style={styles.right}  onChangeText={(e) => {if(checkRange(e,100)) updateMark({mate: e})}}/>
              </View>
              <Text style={{color:'#AA4A44'}}>Data Structures & Algorithm</Text>
              <View style={styles.parent}>
                <TextInput keyboardType="numeric" placeholder="Internals" style={styles.left}  onChangeText={(e) => {if(checkRange(e,40)) updateMark({dsi: e})}}/>
                <TextInput keyboardType="numeric" placeholder="Externals " style={styles.right}  onChangeText={(e) => {if(checkRange(e,100)) updateMark({dse: e})}}/>
              </View>
              <Text style={{color:'#AA4A44'}}>Python</Text>
              <View style={styles.parent}>
                <TextInput keyboardType="numeric" placeholder="Internals" style={styles.left}  onChangeText={(e) => {if(checkRange(e,40)) updateMark({pyi: e})}}/>
                <TextInput keyboardType="numeric" placeholder="Externals " style={styles.right}  onChangeText={(e) => {if(checkRange(e,100)) updateMark({pye: e})}}/>
              </View>
              <Text style={{color:'#AA4A44'}}>Networking</Text>
              <View style={styles.parent}>
                <TextInput keyboardType="numeric" placeholder="Internals" style={styles.left}  onChangeText={(e) => {if(checkRange(e,40)) updateMark({nwi: e})}}/>
                <TextInput keyboardType="numeric" placeholder="Externals " style={styles.right}  onChangeText={(e) => {if(checkRange(e,100)) updateMark({nwe: e})}}/>
              </View>
              <Text style={{color:'#AA4A44'}}>Research Methodology</Text>
              <View style={styles.parent}>
                <TextInput keyboardType="numeric" placeholder="Internals" style={styles.left}  onChangeText={(e) => {if(checkRange(e,40)) updateMark({rmi: e})}}/>
                <TextInput keyboardType="numeric" placeholder="Externals " style={styles.right}  onChangeText={(e) => {if(checkRange(e,100)) updateMark({rme: e})}}/>
              </View>
              <Text style={{color:'#AA4A44'}}>DSA Lab</Text>
              <View style={styles.parent}>
                <TextInput keyboardType="numeric" placeholder="Internals" style={styles.left}  onChangeText={(e) => {if(checkRange(e,60)) updateMark({dsli: e})}}/>
                <TextInput keyboardType="numeric" placeholder="Externals" style={styles.right}  onChangeText={(e) => {if(checkRange(e,40)) updateMark({dsle: e})}}/>
              </View>
              <Text style={{color:'#AA4A44'}}>Python Lab</Text>
              <View style={styles.parent}>
                <TextInput keyboardType="numeric" placeholder="Internals" style={styles.left}  onChangeText={(e) => {if(checkRange(e,60)) updateMark({pyli: e})}}/>
                <TextInput keyboardType="numeric" placeholder="Externals" style={styles.right}  onChangeText={(e) => {if(checkRange(e,40)) updateMark({pyle: e})}}/>
              </View>
              <TouchableOpacity style={styles.button} onPress={calculateGPA}>
                <Text> Submit </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </ScrollView>
      </View>
    </View>
  )
}

// const AddTextInput = () => {
//   const [hidden, setHidden] = useState(true);

//   return (
//     <View style={styles.parent}>
//       <TextInput keyboardType="numeric" placeholder="Internals" style={styles.left} />
//       {
//        hidden &&  <TextInput keyboardType="numeric" placeholder="Externals" style={styles.right} />
//       }
//       <TouchableOpacity style={styles.button} onPress={() =>setHidden(!hidden)}>
//                 <Text> Add </Text>
//               </TouchableOpacity>
//     </View>
//   )
// }


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


export default Cgpa