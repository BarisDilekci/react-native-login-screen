import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

export default function LoginTextField({ placeholder, secureTextEntry = false, value, onChangeText }) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="#A1A1A1"
                secureTextEntry={secureTextEntry}
                value={value} 
                onChangeText={onChangeText} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginBottom: 15,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: "#A1A1A1",
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        color: "#000",
        backgroundColor: "#FFF",
    },
});
