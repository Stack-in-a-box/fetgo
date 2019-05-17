import PageTitle from "components/text/PageTitle";
import React from "react";
import SimpleText from "components/text/SimpleText";
import { Button, CheckBox } from "react-native-elements";
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
                        textStyle={styles.checkboxText}
                        containerStyle={styles.checkboxContainer}
                        checked={false}
                    />
                </View>
                <View>
                    <Button
                        title="Log-in"
                        buttonStyle={styles.button}
                        onPress={() => alert("Login button pressed.")}
                    />
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
    },
    button: {
        backgroundColor: "red"
    }
});
