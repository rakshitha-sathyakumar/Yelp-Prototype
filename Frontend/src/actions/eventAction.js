import {ADD_EVENT} from './types';
import axios from "axios";
import backendServer from "../backendServer";

 export const addEvent = (data) => dispatch => {
    axios.defaults.withCredentials = true;
    axios.post(`${backendServer}/yelp/addEvent`,data)
        .then(response => dispatch({
            type: ADD_EVENT,
            payload: response.data
        }))
        .catch(error => {
            if (error.response && error.response.data) {
                return dispatch({
                    type: ADD_EVENT,
                    payload: error.response.data
                });
            }
        });

 } 