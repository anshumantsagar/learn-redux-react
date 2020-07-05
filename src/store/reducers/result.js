import * as actionType from '../actions/actionTypes';
import { updatedObject } from '../utility';

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.resultElId)
    return updatedObject(state, {results: updatedArray})
};
 
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.STORE_RESULT: return updatedObject(state, {results: state.results.concat({id: new Date() ,value: action.result})});
        case actionType.DELETE_RESULT:return deleteResult(state, action);
        default: return state;
    }
}

export default reducer;