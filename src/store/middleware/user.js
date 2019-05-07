import { userActions } from "../actions/user";
import { apiRequest } from "../actions/api.js";
import { gql_user } from "../graphql/user";
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const userMdl = [

    /*---------------------
        Register
    -----------------------*/
    ({dispatch}) => next => action => {
        next(action);

        if (action.type === userActions.CREATE_USER_REQUEST) {
            
            let isError = false;
            
            if (action.payload.username.trim() === ''){
                dispatch(userActions.updateRegistrationUsernameError("Can not be empty!"));
                isError = true;                
            }

            if (action.payload.password.trim() === ''){
                dispatch(userActions.updateRegistrationPasswordError("Can not be empty!"));
                isError = true;
            }

            if (isError){
                return;
            }

            dispatch(showLoading());
            dispatch(apiRequest(gql_user.createUser(action.payload.username, action.payload.password), null, userActions.CREATE_USER_REQUEST_SUCCESS, userActions.CREATE_USER_REQUEST_ERROR));
        }
        else if (action.type === userActions.UPDATE_REGISTRATION_USERNAME) {
            dispatch(userActions.updateRegistrationUsernameError(""));
        }
        else if (action.type === userActions.UPDATE_REGISTRATION_PASSWORD) {
            dispatch(userActions.updateRegistrationPasswordError(""));
        }
        else if (action.type === userActions.CREATE_USER_REQUEST_SUCCESS) {
            dispatch(userActions.updateRegistrationUsernameError(""));
            dispatch(userActions.updateRegistrationPasswordError(""));
            dispatch(userActions.updateRegistrationUsername(""));
            dispatch(userActions.updateRegistrationPassword(""));
            dispatch(userActions.updateRegistrationMessage(`You are registered! {LoginLink} to continue!`));
            dispatch(hideLoading());
        }
        else if (action.type === userActions.CREATE_USER_REQUEST_ERROR) {
            dispatch(userActions.updateRegistrationMessage("Unexpected error occured!"));
            dispatch(hideLoading());        
        }   

    },

    /*---------------------
        Login
    -----------------------*/
    ({dispatch}) => next => action => {
        next(action);

        if (action.type === userActions.LOGIN_USER_REQUEST) {
            
            let isError = false;
            
            if (action.payload.username.trim() === ''){
                dispatch(userActions.updateLoginUsernameError("Can not be empty!"));
                isError = true;                
            }

            if (action.payload.password.trim() === ''){
                dispatch(userActions.updateLoginPasswordError("Can not be empty!"));
                isError = true;
            }

            if (isError){
                return;
            }

            dispatch(showLoading());
            dispatch(apiRequest(gql_user.getUser(action.payload.username, action.payload.password), null, userActions.LOGIN_USER_REQUEST_SUCCESS, userActions.LOGIN_USER_REQUEST_ERROR));            
        }
        else if (action.type === userActions.UPDATE_LOGIN_USERNAME) {
            dispatch(userActions.updateLoginUsernameError(""));
        }
        else if (action.type === userActions.UPDATE_LOGIN_PASSWORD) {
            dispatch(userActions.updateLoginPasswordError(""));
        }
        else if (action.type === userActions.LOGIN_USER_REQUEST_SUCCESS) {            
            dispatch(userActions.updateLoginUsernameError(""));
            dispatch(userActions.updateLoginPasswordError(""));
            dispatch(userActions.updateLoginUsername(""));
            dispatch(userActions.updateLoginPassword(""));
            
            if (action.payload.data.user != null){
                localStorage.setItem("user", action.payload.data.user._id);
            }
            else{
                dispatch(userActions.updateLoginMessage("Incorrect Username/Password!"));
            }

            dispatch(userActions.loginUser());
            dispatch(hideLoading());            
        }
        else if (action.type === userActions.LOGIN_USER_REQUEST_ERROR) {
            dispatch(userActions.updateLoginMessage("Unexpected error occured!"));
            dispatch(hideLoading());        
        }    

    },

    /*---------------------
        Logout
    -----------------------*/
    ({dispatch}) => next => action => {
        next(action);

        if (action.type === userActions.LOGOUT_USER_REQUEST) {
            
            localStorage.removeItem("user");
            dispatch(userActions.logoutUser());
        } 

    },    
    
]