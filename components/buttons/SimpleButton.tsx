import ButtonBase from "components/buttons/ButtonBase";
import React from "react";
import { Component } from "react";

interface SimpleButtonProps {
    title?: string;
}

export default class SimpleButton extends Component<SimpleButtonProps> {
    render() {
        return <ButtonBase title={this.props.title} />;
    }
}
