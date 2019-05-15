import React from "react";
import SimpleText from "components/SimpleText";
import { Button, CheckBox, StyleSheet, TextInput, View } from "react-native";
import { Component } from "react";

export default class LoginView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SimpleText>Welcome to FetGo</SimpleText>
                <SimpleText>Please log into your FetLife account to continue…</SimpleText>
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
                        <View>
                            <CheckBox />
                            <SimpleText>Remember me</SimpleText>
                        </View>
                    </View>
                    <View>
                        <Button
                            title="Log-in"
                            onPress={() => alert("Login button pressed.")}
                        />
                    </View>
                </View>
            </View>
        );
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
