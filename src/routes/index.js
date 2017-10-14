// /**
//  * Sample React Native App
//  */
import React, { Component } from 'react';
import { NativeRouter, Route, Switch} from 'react-router-native'
import Home from '../views/Home'

let router = (

    <NativeRouter>
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
    </NativeRouter>
)

export default router