import React, { Component } from 'react';
import ArticleItem from './ArticleItem';
import { connect } from 'react-redux'
import {
    StyleSheet,
    Text,
    View
} from 'react-native';


export default class ArticleGroup extends Component<{}> {

    render() {
        return (
            <View style={styles.articleGroup}>
                <View style={styles.title} >
                    <Text style={styles.date}>2017-10-12</Text>
                </View>
                <View style={{flex:1, alignItems:'center', width: "100%", marginTop: 20}}>
                    <ArticleItem></ArticleItem>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    articleGroup: {
        width: '100%'
    },
    title:{
        height:50,
        backgroundColor: '#f9fbf9',

    },
    date:{
        paddingLeft: 20,
        lineHeight: 50,

    }

});