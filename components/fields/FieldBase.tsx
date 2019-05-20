import React from "react";
import { Component } from "react";
import { StyleSheet, TextInput } from "react-native";

interface FieldBaseProps {
    shouldObfuscateText?: boolean;
}

interface FieldBaseState {
    isFocused?: boolean;
}

export default class FieldBase extends Component<FieldBaseProps, FieldBaseState> {
    constructor(props: FieldBaseProps) {
        super(props);
        this.state = { isFocused: false };
    }

    render() {
        const style = Object.assign(
            {},
            styles.field,
            this.state.isFocused ? styles.focused : {}
        );

        return <TextInput
            style={style}
            secureTextEntry={this.props.shouldObfuscateText}
            onFocus={() => this.setState({ isFocused: true })}
            onBlur={() => this.setState({ isFocused: false})}
        />;
    }
}

const styles = StyleSheet.create({
    field: {
        marginTop: 5,
        marginBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 2,
        paddingBottom: 2,
        borderRadius: 4,
        borderWidth: 2,
        backgroundColor: "#404040",
        borderColor: "#404040",
        color: "#CCCCCC"
    },
    focused: {
        borderColor: "#666666"
    }
});
