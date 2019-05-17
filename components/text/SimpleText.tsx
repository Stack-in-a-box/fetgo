import React from "react";
import TextBase from "components/text/TextBase";

export default class SimpleText extends TextBase {
    render() {
        return <TextBase {...this.props} />;
    }
}
