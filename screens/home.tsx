import React from "react";
import { StyleSheet, View, Image, Text, TextInput, Pressable } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>SISTOCK</Text>
            <Image style={styles.image} source={require('../assets/images/box.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 40,
      color: 'white',
    },
    image: {
      width: '55%',
      height: '30%',
    },
    inputs: {
      marginVertical: 10,
      height: 55,
      width: '70%',
      borderRadius: 5,
      paddingHorizontal: 15,
      backgroundColor: 'white',
      elevation: 5,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 10,
        height: 55,
        width: '70%',
        backgroundColor: '#0099FF',
        elevation: 5,
    },
    buttonText: {
        color: 'white',
    },
    socialButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    socialButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 10,
        width: 10,
        height: 55,
        backgroundColor: '#0099FF',
        elevation: 5,
    },
  });