/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'

import {
    StyleSheet,
    FlatList,
    ScrollView,
    Text,
    View
} from 'react-native'
import { connect } from 'react-redux'
import Button from "react-native-button";

/**
 * 从store中拿到的状态
 * @param param0
 */
const mapStateToProps = ({writer}) => {
    return {
        workList: writer.workList || [
            {workName:'javascript', lastModified:'2017-10-10', number:2},
            {workName:'java', lastModified:'2017-10-10', number:4}]
    }
};

const workMap = (dispatch, ownProps) => {
    return {

    }
};

class WorkList extends Component<{}> {

    render() {
        let {workList, navigation} = this.props;

        return (
            <ScrollView>
                <FlatList
                    style={styles.FlatList}
                data={workList}
                renderItem={(item)=>{
                    return (
                        <View style={styles.workItem} onPress={() => navigation.navigate('Home')} >
                            <View style={{marginLeft:10}}>
                                <Text style={styles.workItemText}>{item.item.workName}</Text>
                            </View>
                            <View style={{marginRight:10}}>
                                <Text style={styles.workItemText}>{item.item.number} 篇</Text>
                            </View>
                        </View>
                    )
                }}
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    FlatList:{
        marginTop:10
    },
    workItem: {
        width:"100%",
        height:40,
        backgroundColor:'#ffffff',
        marginTop:1,
        flexDirection:'row',
        justifyContent:"space-between"
    },
    workItemText:{
        lineHeight: 40
    }
});

export default connect(mapStateToProps, workMap)(WorkList)