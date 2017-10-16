/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'

import {
    StyleSheet,
    View
    } from 'react-native'
import { connect } from 'react-redux'
import BlogHeader from "../components/Header";
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

class Home extends Component<{}> {

    render() {
        let {articleLists, navigation} = this.props;

        return (
            <View style={styles.container}>
                <BlogHeader text={navigation.state.params.workName} />
                <ArticleGroup articleLists={articleLists}></ArticleGroup>
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
    }
});

export default connect(mapStateToProps)(Home)