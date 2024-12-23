import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./Button_style";

const Button = ({ onPress, title }) => {
    return(
        <TouchableOpacity  style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

export default Button;