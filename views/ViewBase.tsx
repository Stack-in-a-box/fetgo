import React from "react";
import { Component } from "react";
import { StyleSheet, View } from "react-native";

export default class ViewBase extends Component {
    render() {
        return <View style={styles.view}>
            {this.props.children}
        </View>
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
