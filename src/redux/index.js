import React from 'react'
import {Provider} from 'react-redux'
import store from './store/index'
import AppWithNavigationState from '../routes/navigation'

export default (
    <Provider store={store}>
        <AppWithNavigationState />
    </Provider>
)