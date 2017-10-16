import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
    header: {
        width:"100%",
        height:50,
        backgroundColor:'#199ED8',
    },
    headerText:{
        color:'#ffffff', textAlign: 'center', lineHeight:50
    }
});

export default class BlogHeader extends Component{

    render(){
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    {this.props.text}
                </Text>
        </View>
        )
    }
}
