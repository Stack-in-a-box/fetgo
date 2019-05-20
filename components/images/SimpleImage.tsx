import ImageBase from "components/images/ImageBase";
import React from "react";
import { Component } from "react";
import { ImageSourcePropType } from "react-native";

interface SimpleImageProps {
    source: ImageSourcePropType;
    scale?: number;
}

export default class SimpleImage extends Component<SimpleImageProps> {
    render() {
        return <ImageBase {...this.props} />;
    }
}
