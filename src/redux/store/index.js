/**
 * createStore 生成store
 * applyMiddleware  应用中间件，异步改变状态
 * compose
 * redux-thunk 改造store.dispatch，使后者可以接受函数作为参数
 */
import {createStore, applyMiddleware} from 'redux'
//允许store.dispatch传递函数
import thunk from 'redux-thunk'
// let thunk = require('redux-thunk').default;
// Reducer->传入一个state  ， 生成一个新的state
// 调用方式  createStore(reducer);
import getReducer from '../reducers'
import {AppNavigator} from '../../routes/navigation'
import initialState from './data'

// with react-navigator
const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
}

const store = createStore(
  getReducer(navReducer),
  initialState,
  applyMiddleware(
    thunk
  )
)

export default store