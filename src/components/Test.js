import React, { Component } from 'react';
import Button from "react-native-button";
import {
    Text,
    View
} from 'react-native'

export default class Test extends Component{

    render(){
        const { navigate } = this.props.navigation;

        return (
            <View>
                <Button
                    style={{fontSize: 20, color: 'green'}}
                    styleDisabled={{color: 'red'}}
                    onPress={() => navigate('Home')}>
                    back to home
                </Button>
            </View>
        )
    }
}
