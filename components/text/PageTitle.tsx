import React from "react";
import TextBase from "components/text/TextBase";
import { StyleSheet } from "react-native";

export default class PageTitle extends TextBase {
    render() {
        return <TextBase
            style={styles.text}
            {...this.props}
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
