import React from "react";
import TextBase from "components/TextBase";

export default class SimpleText extends TextBase {
    render() {
        return <TextBase {...this.props} />;
    }
}
