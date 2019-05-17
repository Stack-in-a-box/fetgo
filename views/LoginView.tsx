import PageTitleText from "components/text/PageTitleText";
import React from "react";
import SimpleButton from "components/buttons/SimpleButton";
import SimpleCheckbox from "components/checkboxes/SimpleCheckbox";
import SimpleText from "components/text/SimpleText";
import ViewBase from "views/ViewBase";
import { Component } from "react";
import { TextInput, View } from "react-native";

export default class LoginView extends Component {
    render() {
        return <ViewBase>
            <PageTitleText>Welcome to FetGo</PageTitleText>
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
        </ViewBase>;
    }
}
