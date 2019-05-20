import React from "react";
import { Component } from "react";
import { StyleProp, View, ViewStyle } from "react-native";

interface PanelBaseProps {
    style?: StyleProp<ViewStyle>;
}

export default class PanelBase extends Component<PanelBaseProps> {
    render() {
        return (
            <View style={this.props.style}>
                {this.props.children}
            </View>
        );
    }
}
