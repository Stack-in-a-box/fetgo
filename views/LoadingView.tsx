import React from "react";
import { Component } from "react";
import { StyleSheet, View } from "react-native";

export default class LoadingView extends Component {
    render() {
        return <View style={styles.view} />
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: "black"
    }
});
