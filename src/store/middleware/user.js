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
            dispatch(apiRequest(gql_user.getUserByUsername(action.payload.username), action.payload, userActions.GET_USER_REQUEST_SUCCESS, userActions.GET_USER_REQUEST_ERROR));            
        }
        else if (action.type === userActions.GET_USER_REQUEST_SUCCESS) {            
            if (action.payload.data.userByUsername != null){
                dispatch(userActions.updateRegistrationMessage("Username already exists!", "error"));
                dispatch(hideLoading());
            }
            else{
                dispatch(apiRequest(gql_user.createUser(action.meta.username, action.meta.password), null, userActions.CREATE_USER_REQUEST_SUCCESS, userActions.CREATE_USER_REQUEST_ERROR));
            }                                    
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
            dispatch(userActions.updateRegistrationMessage(`You are registered! {LoginLink} to continue!`, "success"));
            dispatch(hideLoading());
        }
        else if ((action.type === userActions.CREATE_USER_REQUEST_ERROR) || (action.type === userActions.GET_USER_REQUEST_ERROR)) {            
            dispatch(userActions.updateRegistrationMessage("Unexpected error occured!", "error"));
            dispatch(hideLoading());        
        }   

    },

    /*---------------------
        Login
    -----------------------*/
    ({dispatch}) => next => action => {
        next(action);

        if (action.type === userActions.LOGIN_USER_REQUEST) {
            
            dispatch(userActions.updateLoginMessage(""));
            dispatch(userActions.updateLoginUsernameError(""));
            dispatch(userActions.updateLoginPasswordError(""));

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
            dispatch(apiRequest(gql_user.getUser(action.payload.username, action.payload.password), action.payload, userActions.LOGIN_USER_REQUEST_SUCCESS, userActions.LOGIN_USER_REQUEST_ERROR));            
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
            dispatch(userActions.updateLoginMessage(""));

            if (action.payload.data.user != null){                
                if (action.meta.rememberMe){
                    localStorage.setItem("user", action.payload.data.user._id);
                }
                else{
                    sessionStorage.setItem("user", action.payload.data.user._id);
                }
                dispatch(userActions.loginUser());
            }
            else{
                dispatch(userActions.updateLoginMessage("Incorrect Username/Password!", "error"));
            }
            
            dispatch(hideLoading());            
        }
        else if (action.type === userActions.LOGIN_USER_REQUEST_ERROR) {
            dispatch(userActions.updateLoginMessage("Unexpected error occured!", "error"));
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
            sessionStorage.removeItem("user");
            dispatch(userActions.logoutUser());
        } 

    },    
    
]