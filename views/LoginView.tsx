import PageTitle from "components/text/PageTitle";
import React from "react";
import SimpleButton from "components/buttons/SimpleButton";
import SimpleText from "components/text/SimpleText";
import { CheckBox } from "react-native-elements";
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
                    <CheckBox
                        title="Remember me"
                        titleProps={{ style: styles.checkboxText }}
                        containerStyle={styles.checkboxContainer}
                        checked={false}
                    />
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
    },
    checkboxContainer: {
        borderWidth: 0,
        backgroundColor: "black"
    },
    checkboxText: {
        fontFamily: "lucida-grande-regular",
        color: "white"
    }
});
