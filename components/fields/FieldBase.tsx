import React from "react";
import { Component } from "react";
import { StyleSheet, TextInput } from "react-native";

export default class FieldBase extends Component {
    render() {
        return <TextInput style={styles.field} />;
    }
}

const styles = StyleSheet.create({
    field: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 2,
        paddingBottom: 4,
        backgroundColor: "#404040",
        color: "#CCCCCC"
    }
});
