import data from '../store/data'
// import Immutable from 'immutable'
// import { ActionTypes } from '../actionType'
let deal = {

}

let reducer = (state = data.writer, action) => {

    // if(!(state instanceof Immutable.Map)) state = Immutable.Map(state);

    // let workList = state.get('workList'),
    //     currentWorkID = state.get('currentWorkID').toString(),
    //     currentArticleID = state.get('currentArticleID').toString();
    return deal[action.type] ? deal[action.type]() : state;
}


export default reducer;

