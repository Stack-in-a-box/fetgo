import React from "react";
import { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Hello, kinky and tidy TypeScript world!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black"
    },
    text: {
        color: "white"
    }
});
