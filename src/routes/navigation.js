import { StackNavigator, addNavigationHelpers } from "react-navigation"
import { connect } from "react-redux"
import React, { Component } from 'react'
import Routes from "./route"

export const AppNavigator = StackNavigator(Routes)

const mapStateToProps = (state) => ({
    nav: state.nav
})

class App extends Component {
    render() {
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />
        );
    }
}

export default connect(mapStateToProps)(App);

