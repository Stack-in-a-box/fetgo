import React from "react";
import { CheckBox } from "react-native-elements";
import { Component } from "react";
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";

interface CheckboxBaseProps {
    title?: string;
    containerStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
}

interface CheckboxBaseState {
    isChecked: boolean;
}

export default class CheckboxBase extends Component<CheckboxBaseProps, CheckboxBaseState> {
    constructor(props: CheckboxBaseProps) {
        super(props);
        this.state = { isChecked: false };
    }

    render() {
        const { containerStyle, titleStyle } = this.props;
        const { isChecked } = this.state;

        return <CheckBox
            title={this.props.title}
            containerStyle={Object.assign({}, styles.container, containerStyle)}
            titleProps={{ style: Object.assign({}, styles.title, titleStyle) }}
            iconType="material"
            uncheckedIcon="check-box-outline-blank"
            uncheckedColor="#404040"
            checkedIcon="check-box"
            checked={isChecked}
            onPress={() => this.setState({ isChecked: !isChecked })}
        />;
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 0,
        backgroundColor: "transparent"
    },
    title: {
        marginLeft: 5,
        fontFamily: "lucida-grande-regular",
        color: "#CCCCCC"
    }
});
