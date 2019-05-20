import PanelBase from "./PanelBase";
import React from "react";
import { Component } from "react";
import { StyleSheet } from "react-native";

export default class FormPanel extends Component {
    render() {
        return <PanelBase style={styles.panel}>
            {this.props.children}
        </PanelBase>
    }
}

const styles = StyleSheet.create({
    panel: {
        backgroundColor: "#101010"
    }
});
