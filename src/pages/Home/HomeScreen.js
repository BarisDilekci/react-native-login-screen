import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

export default function HomeScreen({ route }) {
    
    const { email = "default@example.com", username = "Anonymous" } = route.params || {};

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <Text>Email: {email}</Text>
            <Text>Username: {username}</Text>
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
    title: {
        fontSize: 25,
        fontWeight: "bold",
    },
});
