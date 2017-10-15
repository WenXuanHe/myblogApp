import {combineReducers} from 'redux'
import writer from './writer'

export default function getReducer(navReducer) {
    return combineReducers({
        writer,
        nav: navReducer
    });
}
