import React from "react";
import { Component } from "react";
import { StyleSheet, StyleProp, Text, TextStyle } from "react-native";

interface TextBaseProps {
    style?: StyleProp<TextStyle>;
}

export default class TextBase extends Component<TextBaseProps> {
    render() {
        return <Text
            style={styles.text}
            {...this.props}
        />;
    }
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "lucida-grande-regular",
        color: "white"
    }
});
