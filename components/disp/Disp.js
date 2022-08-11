import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Disp = ({route}) => {
  const gpa = route.params.email;
  const name = route.params.name;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Disp</Text>
      <Text style={{color: 'black'}}>{gpa}</Text>
      <Text style={{color: 'black'}}>{name}</Text>
      <TouchableOpacity >
        <Text>OK</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Disp