import { View, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { Form, FormItem } from 'react-native-form-component';

const img = {uri: 'https://www.annauniv.edu/cai/images/anna3.jpg'};

const Cgpa = () => {
  const [mark, setMark] = useState({
    cti: 0, cte: 0, mati: 0, mate: 0, dsi: 0, dse: 0, pyi: 0, pye: 0, 
    nwi: 0, nwe: 0, rmi: 0, rme: 0, dsli: 0, dsle: 0, pyli: 0, pyle: 0,
  });

  function updateMark(value) {
    return setMark((prev) => {
        return { ...prev, ...value };
    });
  }

  function calcGrade(mark){
    let grade = '';
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
    let gpa = (calcGrade(parseInt(mark.cti) + parseInt(mark.cte)) * 4) + (calcGrade(parseInt(mark.mati) + parseInt(mark.mate)) * 4)
     + (calcGrade(parseInt(mark.dsi) + parseInt(mark.dse)) * 3) + (calcGrade(parseInt(mark.pyi) + parseInt(mark.pye)) * 3)
     + (calcGrade(parseInt(mark.nwi) + parseInt(mark.nwe)) * 3) + (calcGrade(parseInt(mark.rmi) + parseInt(mark.rme)) *2)
     + (calcGrade(parseInt(mark.dsli) + parseInt(mark.dsle)) * 2) + (calcGrade(parseInt(mark.pyli) + parseInt(mark.pyle)) * 2);
    gpa = gpa / 24;
    alert(gpa);
  }

  return (
    <View>
      <View style={styles.container}>
        <ScrollView>
          <ImageBackground source={img} resizeMode="cover" style={styles.image}>
            <View style={styles.child}/>
            <View style={styles.form}>
              <Text style={styles.textLogin}>mark Calculation</Text>
              <Text style={{color:'#AA4A44'}}>Content Technology</Text>
              <View style={styles.parent}>
                <TextInput keyboardType="numeric" placeholder="Internals (Max: 40)" style={styles.left} max={40} onChangeText={(e) => updateMark({cti: e})}/>
                <TextInput keyboardType="numeric" placeholder="Externals (Max: 60)" style={styles.right}  onChangeText={(e) => updateMark({cte : e })}/>
              </View>
              <Text style={{color:'#AA4A44'}}>Mathematics</Text>
              <View style={styles.parent}>
                <TextInput keyboardType="numeric" placeholder="Internals" style={styles.left}  onChangeText={(e) => updateMark({mati : e })}/>
                <TextInput keyboardType="numeric" placeholder="Externals" style={styles.right}  onChangeText={(e) => updateMark({mate : e })}/>
              </View>
              <Text style={{color:'#AA4A44'}}>Data Structures & Algorithm</Text>
              <View style={styles.parent}>
                <TextInput keyboardType="numeric" placeholder="Internals" style={styles.left}  onChangeText={(e) => updateMark({dsi : e })}/>
                <TextInput keyboardType="numeric" placeholder="Externals" style={styles.right}  onChangeText={(e) => updateMark({dse : e })}/>
              </View>
              <Text style={{color:'#AA4A44'}}>Python</Text>
              <View style={styles.parent}>
                <TextInput keyboardType="numeric" placeholder="Internals" style={styles.left}  onChangeText={(e) => updateMark({pyi : e })}/>
                <TextInput keyboardType="numeric" placeholder="Externals" style={styles.right}  onChangeText={(e) => updateMark({pye : e })}/>
              </View>
              <Text style={{color:'#AA4A44'}}>Networking</Text>
              <View style={styles.parent}>
                <TextInput keyboardType="numeric" placeholder="Internals" style={styles.left}  onChangeText={(e) => updateMark({nwi : e })}/>
                <TextInput keyboardType="numeric" placeholder="Externals" style={styles.right}  onChangeText={(e) => updateMark({nwe : e })}/>
              </View>
              <Text style={{color:'#AA4A44'}}>Research Methodology</Text>
              <View style={styles.parent}>
                <TextInput keyboardType="numeric" placeholder="Internals" style={styles.left}  onChangeText={(e) => updateMark({rmi : e })}/>
                <TextInput keyboardType="numeric" placeholder="Externals" style={styles.right}  onChangeText={(e) => updateMark({rme : e })}/>
              </View>
              <Text style={{color:'#AA4A44'}}>DSA Lab</Text>
              <View style={styles.parent}>
                <TextInput keyboardType="numeric" placeholder="Internals" style={styles.left}  onChangeText={(e) => updateMark({dsli : e })}/>
                <TextInput keyboardType="numeric" placeholder="Externals" style={styles.right}  onChangeText={(e) => updateMark({dsle : e })}/>
              </View>
              <Text style={{color:'#AA4A44'}}>Python Lab</Text>
              <View style={styles.parent}>
                <TextInput keyboardType="numeric" placeholder="Internals" style={styles.left}  onChangeText={(e) => updateMark({pyli : e })}/>
                <TextInput keyboardType="numeric" placeholder="Externals" style={styles.right}  onChangeText={(e) => updateMark({pyle : e })}/>
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