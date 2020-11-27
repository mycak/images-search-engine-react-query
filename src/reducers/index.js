import { combineReducers } from 'redux';

const queriesReducer = (state = {}, action) => {
    switch(action.type) {
        case 'FETCH_PICTURES':
            return {...action.payload};
        default:
            return state
    }
};
const currentPictureReducer = (state = {}, action) => {
    switch(action.type) {
        case 'FETCH_CURRENT_PICTURE':
            return {...action.payload};
        case 'REMOVE_CURRENT_PICTURE_DATA':
            return {}
        default:
            return state
    }
};

export default combineReducers({
    pictures: queriesReducer,
    currentPicture: currentPictureReducer
});