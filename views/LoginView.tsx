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
        return (
            <ContentView>
                {this.titles()}
                {this.form()}
            </ContentView>
        );
    }

    private titles() {
        return (
            <SimplePanel style={styles.titlesContainer}>
                <PageTitleText>Welcome to FetGo</PageTitleText>
                <SimpleText>Please log into your FetLife™ account to continue…</SimpleText>
            </SimplePanel>
        );
    }

    private form() {
        return (
            <SimplePanel style={styles.formPanelContainer}>
                <FormPanel style={styles.formPanel}>
                    {this.fields()}
                    {this.button()}
                </FormPanel>
            </SimplePanel>
        );
    }

    private fields() {
        return (
            <SimplePanel style={styles.fieldsContainer}>
                {this.username()}
                {this.password()}
                {this.remember()}
            </SimplePanel>
        );
    }

    private username() {
        return (
            <SimplePanel>
                <SimpleText>Username / email address:</SimpleText>
                <SimpleField />
            </SimplePanel>
        );
    }

    private password() {
        return (
            <SimplePanel style={styles.passwordPanel}>
                <SimpleText>Password:</SimpleText>
                <PasswordField />
            </SimplePanel>
        );
    }

    private remember() {
        return <SimpleCheckbox title="Remember me" />;
    }

    private button() {
        return (
            <SimplePanel style={styles.buttonPanel}>
                <SimpleButton title="Log-in" />
            </SimplePanel>
        );
    }
}

const styles = StyleSheet.create({
    titlesContainer: {
        alignItems: "center"
    },
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
