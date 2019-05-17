import PageTitle from "components/text/PageTitle";
import React from "react";
import SimpleButton from "components/buttons/SimpleButton";
import SimpleCheckbox from "components/checkboxes/SimpleCheckbox";
import SimpleText from "components/text/SimpleText";
import { StyleSheet, TextInput, View } from "react-native";
import { Component } from "react";

export default class LoginView extends Component {
    render() {
        return <View style={styles.container}>
            <PageTitle>Welcome to FetGo</PageTitle>
            <SimpleText>Please log into your FetLife™ account to continue…</SimpleText>
            <View>
                <View>
                    <View>
                        <SimpleText>Username / email address:</SimpleText>
                        <TextInput />
                    </View>
                    <View>
                        <SimpleText>Password:</SimpleText>
                        <TextInput />
                    </View>
                    <SimpleCheckbox title="Remember me" />
                </View>
                <View>
                    <SimpleButton title="Log-in" />
                </View>
            </View>
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
    }
});
