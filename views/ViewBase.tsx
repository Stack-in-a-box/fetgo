import React from "react";
import { Component } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface ViewBaseProps {
    style?: StyleProp<ViewStyle>
}

export default class ViewBase extends Component<ViewBaseProps> {
    render() {
        return (
            <View style={Object.assign({}, styles.view, this.props.style)}>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
    }
});
