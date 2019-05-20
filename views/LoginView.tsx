import ContentView from "views/ContentView";
import FormPanel from "components/panels/FormPanel";
import PageTitleText from "components/text/PageTitleText";
import PasswordField from "components/fields/PasswordField";
import React from "react";
import SimpleButton from "components/buttons/SimpleButton";
import SimpleCheckbox from "components/checkboxes/SimpleCheckbox";
import SimpleField from "components/fields/SimpleField";
import SimpleText from "components/text/SimpleText";
import { Component } from "react";
import { View } from "react-native";

export default class LoginView extends Component {
    render() {
        return <ContentView>
            <PageTitleText>Welcome to FetGo</PageTitleText>
            <SimpleText>Please log into your FetLife™ account to continue…</SimpleText>
            <FormPanel>
                <View>
                    <View>
                        <SimpleText>Username / email address:</SimpleText>
                        <SimpleField />
                    </View>
                    <View>
                        <SimpleText>Password:</SimpleText>
                        <PasswordField />
                    </View>
                    <SimpleCheckbox title="Remember me" />
                </View>
                <View>
                    <SimpleButton title="Log-in" />
                </View>
            </FormPanel>
        </ContentView>;
    }
}
