import React, { useState } from "react";
import { SafeAreaView, Text, Alert, StyleSheet, View } from "react-native";
import TextField from "../../components/TextField/TextField";
import CustomButton from "../../components/Button/Button.js";

export default function Login({ navigation }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert("Error", "Please fill in all fields");
            return;
        }

        navigation.navigate("Home", {
            email: email, 
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Welcome Back!</Text>
                <Text style={styles.text}>Please login to your account</Text>

                <TextField 
                    placeholder="Username" 
                    value={email} 
                    onChangeText={setEmail} 
                />
                <TextField 
                    placeholder="Password" 
                    secureTextEntry={true} 
                    value={password} 
                    onChangeText={setPassword} 
                />

                <View style={styles.buttonContainer}>
                    <CustomButton title="Login" onPress={handleLogin} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
    },
    content: {
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 40,
    },
    title: {
        fontFamily: "poppins",
        fontSize: 30,
        fontWeight: "600",
        color: "#1F41BB",
        textAlign: "center",
        marginBottom: 10,
    },
    text: {
        fontFamily: "poppins",
        fontSize: 14,
        fontWeight: "400",
        color: "#A1A1A1",
        textAlign: "center",
        marginBottom: 30,
    },
    buttonContainer: {
        marginTop: 20,
        width: "100%",
    },
});
