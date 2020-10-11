import { GET_USER, UPDATE_USER } from "./types";
import axios from "axios";
import backendServer from "../backendServer";

export const getUser = () => dispatch => {
    axios.get(`${backendServer}/yelp/userProfile/${localStorage.getItem("user_id")}`)
        .then(response => dispatch({
            type: GET_USER,
            payload: response.data
        }))
        .catch(error => {
            console.log(error);
        });
}

export const updateUser = (userProfileData) => dispatch => {
    axios.defaults.withCredentials = true;
    axios.post(`${backendServer}/yelp/userProfile/update/${localStorage.getItem("user_id")}`, userProfileData)
        .then(response => dispatch({
            type: UPDATE_USER,
            payload: response.data
        }))
        .catch(error => {
            if (error.response && error.response.data) {
                return dispatch({
                    type: UPDATE_USER,
                    payload: error.response.data
                });
            }
            return;
        });
}