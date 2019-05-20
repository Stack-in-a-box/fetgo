import FieldBase from "components/fields/FieldBase";
import React from "react";
import { Component } from "react";

export default class PasswordField extends Component {
    render() {
        return <FieldBase shouldObfuscateText={true} />;
    }
}
