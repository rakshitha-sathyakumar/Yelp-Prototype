import { combineReducers } from 'redux';
import userProfileReducer from './userProfileReducer';
import restProfileReducer from './restProfileReducer'
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';

export default combineReducers({
    login: loginReducer,
    signup: signupReducer,
    userProfile: userProfileReducer,
    restProfile: restProfileReducer
});