import {GET_RESTORDER} from '../actions/types';

const initialState = {
    user: []
}

export default function(state = initialState, action){
    console.log(action.payload);
    switch(action.type){
        case GET_RESTORDER:
            return {
                ...state,
                user: action.payload
            };
        // case GET_RESTEVENT:
        //     return {
        //         ...state,
        //         event: action.payload
        //     };

        default:
            return state
    }
};
