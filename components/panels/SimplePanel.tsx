import PanelBase from "components/panels/PanelBase";
import React from "react";
import { Component } from "react";
import { StyleProp, ViewStyle } from "react-native";

interface SimplePanelProps {
    style?: StyleProp<ViewStyle>;
}

export default class SimplePanel extends Component<SimplePanelProps> {
    render() {
        return <PanelBase style={this.props.style}>
            {this.props.children}
        </PanelBase>
    }
}
