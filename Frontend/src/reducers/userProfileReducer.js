import { GET_USER, UPDATE_USER } from '../actions/types';

 const initialState = {
     user: {},
     status: ""
 };

 export default (state = initialState, action) => {
    switch(action.type){
        case GET_USER:
            return {
                ...state,
                user: action.payload
            };
        case UPDATE_USER:
            return {
                ...state,
                status: action.payload
            };
        default:
            return state;
    }
 };