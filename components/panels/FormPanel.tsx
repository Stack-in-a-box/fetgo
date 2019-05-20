import PanelBase from "components/panels/PanelBase";
import React from "react";
import { Component } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";

interface FormPanelProps {
    style?: StyleProp<ViewStyle>;
}

export default class FormPanel extends Component<FormPanelProps> {
    render() {
        return (
            <PanelBase style={Object.assign({}, styles.panel, this.props.style)}>
                {this.props.children}
            </PanelBase>
        );
    }
}

const styles = StyleSheet.create({
    panel: {
        borderRadius: 5,
        backgroundColor: "#101010"
    }
});
