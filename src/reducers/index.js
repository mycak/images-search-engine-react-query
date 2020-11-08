import { combineReducers } from 'redux';

const queriesReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_QUERIES':
            return {...action.payload};
        default:
            return state
    }
};
const currentPictureReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_CURRENT_PICTURE':
            return {...action.payload};
        default:
            return state
    }
}

export default combineReducers({
    pictures: queriesReducer,
    currentPicture: currentPictureReducer
});