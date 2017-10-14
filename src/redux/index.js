import React from 'react'
import {Provider} from 'react-redux'
import store from './store/index'
import routes from '../routes'

export default (
    <Provider store={store}>
        {routes}
    </Provider>
)