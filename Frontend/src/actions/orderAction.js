//import {ADD_EVENT} from './types';
import {GET_RESTORDER} from './types';
import axios from "axios";
import backendServer from "../backendServer";

export const getRestOrder = () => dispatch => {
    axios.get(`${backendServer}/yelp/order/rest/${localStorage.getItem("rest_id")}`)
        .then(response => dispatch({
            type: GET_RESTORDER,
            payload: response.data
        }))
        .catch(error => {
            console.log(error);
        });
}