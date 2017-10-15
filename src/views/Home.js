/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'

import {
    StyleSheet,
    FlatList,
    Text,
    View
    } from 'react-native'
import { connect } from 'react-redux'
import Button from "react-native-button";
import ArticleGroup from '../components/ArticleGroup'

/**
 * 从store中拿到的状态
 * @param param0
 */
const mapStateToProps = ({writer}) => {
    return {
        articleLists: [{day:'2017-05-21', articles:[{title:"有朋自远方来", content:'出自论语，  不亦说乎'}]}], //
    }
}

const workMap = (dispatch, ownProps) => {
    return {

    }
}

class Home extends Component<{}> {

    render() {
        let {articleLists, navigation} = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{color:'#ffffff', textAlign: 'center', lineHeight:50}}>
                        博客网站
                    </Text>
                </View>

                <View style={{flex:1, alignItems:'center', width: "100%"}}>
                    <ArticleGroup articleLists={articleLists}></ArticleGroup>
                </View>

                <Button
                    style={{fontSize: 20, color: 'green'}}
                    styleDisabled={{color: 'red'}}
                    onPress={() => navigation.navigate('Test')}>
                    Press Me!
                </Button>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#ffffff',
    },
    header: {
        width:"100%",
        height:50,
        backgroundColor:'#199ED8',
    }
});

export default connect(mapStateToProps, workMap)(Home)