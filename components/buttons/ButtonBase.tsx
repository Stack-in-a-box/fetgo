import React from "react";
import { Button } from "react-native-elements";
import { Component } from "react";
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";

interface ButtonBaseProps {
    title?: string;
    buttonStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
}

export default class ButtonBase extends Component<ButtonBaseProps> {
    render() {
        const { buttonStyle, title, titleStyle } = this.props;

        return <Button
            title={title}
            buttonStyle={Object.assign({}, styles.button, buttonStyle)}
            titleStyle={Object.assign({}, styles.title, titleStyle)}
        />;
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#AA0000"
    },
    title: {
        fontFamily: "lucida-grande-regular"
    }
});
