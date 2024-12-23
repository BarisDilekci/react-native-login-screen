import React from "react";
import { Image, SafeAreaView, Text, View, StyleSheet } from "react-native";
import Button from "../components/Button/Button"; 
import RegisterButton from "../components/Button/Register/RegisterButton.js"; 
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


export default function Welcome( {} ) {

    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image 
                    source={require('../assets/images/welcome-image.png')} 
                    style={styles.image} 
                    resizeMode="contain" 
                />
                
                <Text style={styles.title}>Welcome to React Native</Text>
                <Text style={styles.text}>An application where we basically do navigation operations.</Text>
                
                <View style={styles.buttonContainer}>
                    <Button 
                        title="Giriş Yap" 
                        onPress={() => navigation.navigate('Login')} 
                        style={styles.button} 
                    />
                    <RegisterButton 
                        title="Kayıt ol" 
                        onPress={() => navigation.navigate('Register')} 
                        style={styles.button}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#F5F5F5', 
    },
    content: {
        width: '90%', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%', 
        height: 250,
        marginBottom: 20,
    },
    title: {
        fontFamily: 'poppins',
        fontSize: 35, 
        fontWeight: 'semibold',
        color: '#1F41BB', 
        textAlign: 'center',
        marginBottom: 30,
    },
    text : {
        fontFamily: 'poppins',
        fontSize: 14, 
        fontWeight: 'regular',
        color: '#000000', 
        textAlign: 'center', 
        marginBottom: 30,
    },
    buttonContainer: {
        justifyContent: 'space-between', 
        width: '90%', 
        marginTop: 20, 
    },
    button: {
        width: '48%',
        marginHorizontal: 5, 
    }
});
