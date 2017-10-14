import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class ArticleShort extends Component<{}> {
    render() {
        return (
            <View style={styles.article}>
                <View style={styles.title}>
                    <Text style={{paddingLeft: 20, lineHeight:40,}}>
                        技能特长
                    </Text>
                </View>

                <View style={styles.articleBody}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    article: {
        width:'90%',
        height:130,
        backgroundColor: '#fafafa',
        borderWidth: 1,
        borderColor: '#797979',
        borderRadius: 5
    },
    title: {
        width:"100%",
        height:40,
        backgroundColor:'#eaeaea',
        borderColor: '#797979',
    },

    articleBody: {
        flex: 1
    }
});