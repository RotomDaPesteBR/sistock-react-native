import React from "react";
import { StyleSheet, View, Image, Text, TextInput, Pressable, ImageBackground, BackHandler } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
    const navigation = useNavigation()

    useEffect(()=>navigation.addListener('beforeRemove', (e) => {e.preventDefault(); BackHandler.exitApp();}))

    const [CPF, onChangeCPF] = React.useState("");
    const [senha, onChangeSenha] = React.useState("");

    function CPFChange (value: string) {
        value = value.replace(/\D/g,"");
        value = value.replace(/^(\d{9})(\d)/,"$1-$2");
        onChangeCPF(value)
    }

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={require('../assets/images/login.png')}>
                <Text style={styles.title}>SISTOCK</Text>
                <Image style={styles.image} source={require('../assets/images/box.png')}/>
                <TextInput style={styles.inputs} placeholder="Informe seu CPF" keyboardType="numeric" value={CPF} onChangeText={CPFChange} maxLength={12}/>
                <TextInput style={styles.inputs} placeholder="Informe sua senha" value={senha} onChangeText={onChangeSenha} secureTextEntry={true}/>
                <Pressable style={styles.button} onPress={()=>{navigation.navigate('Home')}}>
                    <Text style={styles.buttonText}>ENTRAR</Text>
                </Pressable>
                <View style={styles.socialButtons}>
                    <Pressable style={styles.socialButton} onPress={()=>{navigation.navigate('Home')}}>

                    </Pressable>
                    <Pressable style={styles.socialButton} onPress={()=>{navigation.navigate('Home')}}>

                    </Pressable>
                    <Pressable style={styles.socialButton} onPress={()=>{navigation.navigate('Home')}}>
                        
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    background: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    title: {
      fontSize: 40,
      color: 'white',
      elevation: 2,
    },
    image: {
      width: '55%',
      height: 250,
    },
    inputs: {
      marginVertical: 10,
      height: 55,
      width: '70%',
      borderRadius: 5,
      paddingHorizontal: 15,
      backgroundColor: 'white',
      elevation: 2,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 10,
        height: 55,
        width: '70%',
        backgroundColor: '#0099FF',
        elevation: 2,
    },
    buttonText: {
        color: 'white',
    },
    socialButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    socialButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 10,
        height: 55,
        backgroundColor: '#0099FF',
        elevation: 2,
    },
  });