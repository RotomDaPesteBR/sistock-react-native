import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Splash() {
    const navigation = useNavigation()
    
    useEffect(() => {
        setTimeout(() => {navigation.navigate('Login')}, 3000) 
    },[]);

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/images/splash.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
    }
  });