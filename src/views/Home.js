/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import { connect } from 'react-redux'

import ArticleGroup from '../components/ArticleGroup'

/**
 * 从store中拿到的状态
 * @param param0
 */
const mapStateToProps = ({writer}) => {
    return {
        workList: writer.workList
    }
}

const workMap = (dispatch, ownProps) => {
    return {

    }
}

class Home extends Component<{}> {

    render() {
        let {workList} = this.props;

        console.log('workList', workList);

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{color:'#ffffff', textAlign: 'center', lineHeight:50}}>
                        博客网站
                    </Text>
                </View>
                <View style={{flex:1, alignItems:'center', width: "100%"}}>
                    <ArticleGroup></ArticleGroup>
                </View>
                <Text>
                    workList: {workList}
                </Text>
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
        marginTop:20
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

export default connect(mapStateToProps, workMap)(Home)