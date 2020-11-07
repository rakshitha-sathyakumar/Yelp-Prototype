import {ADD_EVENT} from '../actions/types';
import {GET_RESTEVENT} from '../actions/types';

const initialState = {
    event: []
}

export default function(state = initialState, action){
    console.log(action.payload);
    switch(action.type){
        case ADD_EVENT:
            return {
                ...state,
                event: action.payload
            };
        case GET_RESTEVENT:
            return {
                ...state,
                event: action.payload
            };

        default:
            return state
    }
};

