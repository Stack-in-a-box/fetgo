import React from "react";
import ViewBase from "views/ViewBase";
import { Component } from "react";
import { StyleSheet } from "react-native";

export default class ContentView extends Component {
    render() {
        return (
            <ViewBase style={styles.view}>
                {this.props.children}
            </ViewBase>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#1B1B1B"
    }
});
