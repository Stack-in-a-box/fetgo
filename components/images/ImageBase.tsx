import React from "react";
import { Component } from "react";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";

interface ImageBaseProps {
    source: ImageSourcePropType;
    scale?: number;
}

export default class ImageBase extends Component<ImageBaseProps> {
    render() {
        const { scale, source } = this.props;

        const styles = StyleSheet.create({
            image: {
                width: scale,
                height: scale
            }
        });

        return <Image
            source={source}
            style={scale ? styles.image : null}
            resizeMode={"contain"}
        />;
    }
}
