import React from "react";
import TextBase from "components/text/TextBase";
import { Component } from "react";

export default class SimpleText extends Component {
    render() {
        return <TextBase children={this.props.children} />;
    }
}
