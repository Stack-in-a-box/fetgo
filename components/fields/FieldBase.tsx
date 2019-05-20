import React from "react";
import { Component } from "react";
import { StyleSheet, TextInput } from "react-native";

interface FieldBaseProps {
    shouldObfuscateText?: boolean;
}

export default class FieldBase extends Component<FieldBaseProps> {
    render() {
        return <TextInput
            style={styles.field}
            secureTextEntry={this.props.shouldObfuscateText}
        />;
    }
}

const styles = StyleSheet.create({
    field: {
        marginTop: 3,
        marginBottom: 3,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 2,
        paddingBottom: 2,
        backgroundColor: "#404040",
        color: "#CCCCCC"
    }
});
