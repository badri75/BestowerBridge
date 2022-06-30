import React from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';

const img = {uri: 'https://www.globalgiving.org/pfil/21544/03_2_Large.jpg'};

export default function LogIn() {
    return (
        <View style={styles.container}>
            <Text>Login</Text>
        </View>
    );
};
//<ImageBackground source={img} resizeMode="cover" style={styles.image}/>

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      image: {
        flex: 1,
        justifyContent: "center"
      },
});
