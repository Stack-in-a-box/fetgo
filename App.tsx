import LoadingView from "views/LoadingView";
import LoginView from "views/LoginView";
import React from "react";
import { Component } from "react";
import { Font } from "expo";

interface AppState {
    fontsAreLoaded?: boolean;
}

export default class App extends Component<{}, AppState> {
    constructor(props: any) {
        super(props);
        this.state = { fontsAreLoaded: false };
    }

    async componentDidMount() {
        await Font.loadAsync({
            "lucida-grande-regular": require("./assets/fonts/LucidaGrandeRegular.ttf"),
            "lucida-grande-bold": require("./assets/fonts/LucidaGrandeBold.ttf")
        });

        this.setState({ fontsAreLoaded: true });
    }

    render() {
        if (!this.state.fontsAreLoaded) return <LoadingView />;
        return <LoginView />;
    }
}
