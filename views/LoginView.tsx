import ContentView from "views/ContentView";
import FormPanel from "components/panels/FormPanel";
import PageTitleText from "components/text/PageTitleText";
import PasswordField from "components/fields/PasswordField";
import React from "react";
import SimpleButton from "components/buttons/SimpleButton";
import SimpleCheckbox from "components/checkboxes/SimpleCheckbox";
import SimpleField from "components/fields/SimpleField";
import SimplePanel from "components/panels/SimplePanel";
import SimpleText from "components/text/SimpleText";
import { Component } from "react";
import { StyleSheet } from "react-native";

export default class LoginView extends Component {
    render() {
        return <ContentView>
            <PageTitleText>Welcome to FetGo</PageTitleText>
            <SimpleText>Please log into your FetLife™ account to continue…</SimpleText>
            <SimplePanel style={styles.formPanelContainer}>
                <FormPanel style={styles.formPanel}>
                    <SimplePanel style={styles.fieldsContainer}>
                        <SimplePanel>
                            <SimpleText>Username / email address:</SimpleText>
                            <SimpleField />
                        </SimplePanel>
                        <SimplePanel style={styles.passwordPanel}>
                            <SimpleText>Password:</SimpleText>
                            <PasswordField />
                        </SimplePanel>
                        <SimpleCheckbox title="Remember me" />
                    </SimplePanel>
                    <SimplePanel style={styles.buttonPanel}>
                        <SimpleButton title="Log-in" />
                    </SimplePanel>
                </FormPanel>
            </SimplePanel>
        </ContentView>;
    }
}

const styles = StyleSheet.create({
    formPanelContainer: {
        width: "100%"
    },
    formPanel: {
        margin: 15
    },
    fieldsContainer: {
        paddingTop: 13,
        paddingLeft: 13,
        paddingRight: 13
    },
    passwordPanel: {
        marginTop: 10
    },
    buttonPanel: {
        padding: 13,
        borderTopWidth: 1,
        borderTopColor: "#333333"
    }
});
