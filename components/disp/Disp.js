import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Disp = (props) => {
    console.log(props.gpa)
  return (
    <View>
      <Text>Disp</Text>
      <Text>{props.gpa}</Text>
      <TouchableOpacity onPress={() => {props.isLive1()}}>
        <Text>OK</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Disp