import React, { Component } from 'react';
import ArticleItem from './ArticleItem';

import {
    StyleSheet,
    FlatList,
    ScrollView,
    Text,
    View
} from 'react-native';

const Article = (props) => {
    return (
        <View style={styles.articleGroup}>
            <View style={styles.title} >
                <Text style={styles.date}>{props.day}</Text>
            </View>
            <FlatList
                data={props.articles}
                renderItem={(item, i)=>{
                    return (
                        <View key={i} style={{flex:1, alignItems:'center', width: "100%", marginTop: 20}}>
                            <ArticleItem {...item.item}></ArticleItem>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default class ArticleGroup extends Component {

    render() {
        let {articleLists} = this.props;
        return (
            <View style={styles.group}>
                <ScrollView style={styles.w_100}>
                    <FlatList
                        style={styles.w_100}
                        data = {articleLists}
                        renderItem = {(item, i) => <Article key={i} {...item.item}></Article>}
                    />
                </ScrollView>
            </View>
            );
        }
}

const styles = StyleSheet.create({
    group:{
        flex:1, alignItems:'center', width: "100%"
    },
    title:{
        height:50,
        backgroundColor: '#f9fbf9',
    },
    date:{
        paddingLeft: 20,
        lineHeight: 50,
    },
    w_100:{
        width: '100%'
    }

});