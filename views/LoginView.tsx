import React from "react";
import { Button, CheckBox, StyleSheet, Text, TextInput, View } from "react-native";
import { Component } from "react";

export default class LoginView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome to FetGo</Text>
                <Text>Please log into your FetLife account to continue…</Text>
                <View>
                    <View>
                        <View>
                            <Text>Username / email address:</Text>
                            <TextInput />
                        </View>
                        <View>
                            <Text>Password:</Text>
                            <TextInput />
                        </View>
                        <View>
                            <CheckBox />
                            <Text>Remember me</Text>
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
    }
});
