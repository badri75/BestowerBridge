import React from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';

const img = {uri: 'https://www.globalgiving.org/pfil/21544/03_2_Large.jpg'};

const DisImage = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={img} resizeMode="cover" style={styles.image}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      image: {
        flex: 1,
        justifyContent: "center"
      },
});

export default DisImage;