import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Disp = ({route}) => {
  const gpa = route.params.gpa1;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Disp</Text>
      <Text style={{color: 'black'}}>{gpa}</Text>
      <TouchableOpacity >
        <Text>OK</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Disp