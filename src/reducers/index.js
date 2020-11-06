import { combineReducers } from 'redux';

const queriesReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_QUERIES':
            return {...action.payload};
        default:
            return state
    }
};

export default combineReducers({
    queries: queriesReducer
});