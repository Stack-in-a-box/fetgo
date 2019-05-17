import CheckboxBase from "components/checkboxes/CheckboxBase";
import React from "react";
import { Component } from "react";

interface SimpleCheckboxProps {
    title?: string;
}

export default class SimpleCheckbox extends Component<SimpleCheckboxProps> {
    render() {
        return <CheckboxBase title={this.props.title} />;
    }
}
