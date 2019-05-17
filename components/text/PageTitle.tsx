import React from "react";
import TextBase from "components/text/TextBase";
import { Component } from "react";
import { StyleSheet } from "react-native";

export default class PageTitle extends Component {
    render() {
        return <TextBase
            style={styles.text}
            children={this.props.children}
        />;
    }
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "lucida-grande-bold",
        fontSize: 30,
        color: "red"
    }
});
