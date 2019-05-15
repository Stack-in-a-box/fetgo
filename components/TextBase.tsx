import React from "react";
import { Component } from "react";
import { StyleSheet, Text } from "react-native";

export default class TextBase extends Component {
    render() {
        return <Text
            style={styles.text}
            {...this.props}
        />;
    }
}

const styles = StyleSheet.create({
    text: {
        color: "white"
    }
});
