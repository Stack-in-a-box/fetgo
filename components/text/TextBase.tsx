import React from "react";
import { Component } from "react";
import { StyleSheet, StyleProp, Text, TextStyle } from "react-native";

interface TextBaseProps {
    style?: StyleProp<TextStyle>;
}

export default class TextBase extends Component<TextBaseProps> {
    render() {
        const { children, style } = this.props;

        return <Text
            style={Object.assign({}, styles.text, style)}
            children={children}
        />;
    }
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "lucida-grande-regular",
        color: "white"
    }
});
