import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "/Users/barisdilekci/Desktop/FitnessAppRegister/src/components/Button/Register/RegisterButton_style";

const Button = ({ onPress, title }) => {
    return(
        <TouchableOpacity  style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

export default Button;