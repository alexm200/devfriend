import { userActions } from "../actions/user";
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import DevFriendSdk from '../../sdk/devfriend.sdk.js';
import config from '../../config.js';
import { menuItemActions } from "../actions/menuItem";

const sdk = new DevFriendSdk(config);

export const userMdl = [

    /*---------------------
        Register
    -----------------------*/
    ({dispatch}) => next => action => {
        next(action);

        if (action.type === userActions.CREATE_USER_REQUEST) {
            
            let isError = false;
            
            // Check empty username
            if (action.payload.username.trim() === ''){
                dispatch(userActions.updateRegistrationUsernameError("Can not be empty!"));
                isError = true;                
            }

            // Check empty password
            if (action.payload.password.trim() === ''){
                dispatch(userActions.updateRegistrationPasswordError("Can not be empty!"));
                isError = true;
            }

            if (isError){
                return;
            }

            dispatch(showLoading());
            
            // Check username already exists
            sdk.users.get({ username: action.payload.username })
            .then((data) => {

                if (data.users.length > 0){
                    dispatch(userActions.updateRegistrationMessage("Username already exists!", "error"));
                    dispatch(hideLoading());
                }
                else {
                    
                    // Create user
                    sdk.users.create(action.payload.username, action.payload.password, false)
                    .then((data) => {

                        dispatch(userActions.updateRegistrationUsernameError(""));
                        dispatch(userActions.updateRegistrationPasswordError(""));
                        dispatch(userActions.updateRegistrationUsername(""));
                        dispatch(userActions.updateRegistrationPassword(""));
                        dispatch(userActions.updateRegistrationMessage(`You are registered! {LoginLink} to continue!`, "success"));
                        dispatch(hideLoading());  

                    })
                    .catch(() => {

                        dispatch(userActions.updateRegistrationMessage("Unexpected error occured!", "error"));
                        dispatch(hideLoading());

                    });                    
                    
                }
                
            })
            .catch(() => {
                dispatch(userActions.updateRegistrationMessage("Unexpected error occured!", "error"));
                dispatch(hideLoading());
            });

        }
        else if (action.type === userActions.UPDATE_REGISTRATION_USERNAME) {
            dispatch(userActions.updateRegistrationUsernameError(""));
        }
        else if (action.type === userActions.UPDATE_REGISTRATION_PASSWORD) {
            dispatch(userActions.updateRegistrationPasswordError(""));
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
            
            // Check empty username
            if (action.payload.username.trim() === ''){
                dispatch(userActions.updateLoginUsernameError("Can not be empty!"));
                isError = true;                
            }

            // Check empty password
            if (action.payload.password.trim() === ''){
                dispatch(userActions.updateLoginPasswordError("Can not be empty!"));
                isError = true;
            }

            if (isError){
                return;
            }

            dispatch(showLoading());

            // Get user
            sdk.users.get({ username: action.payload.username, password: action.payload.password })
            .then((data) => {
                
                dispatch(userActions.updateLoginUsernameError(""));
                dispatch(userActions.updateLoginPasswordError(""));
                dispatch(userActions.updateLoginUsername(""));
                dispatch(userActions.updateLoginPassword(""));
                dispatch(userActions.updateLoginMessage(""));
                
                if (data.users.length > 0){
                    if (action.payload.rememberMe){
                        localStorage.setItem("user", data.users[0]._id);
                    }
                    else{
                        sessionStorage.setItem("user", data.users[0]._id);
                    }                    
                    dispatch(userActions.loginUser());
                    dispatch(menuItemActions.getMenuItemsRequest(data.users[0]._id));
                }
                else{
                    dispatch(userActions.updateLoginMessage("Incorrect Username/Password!", "error"));
                }
                
                dispatch(hideLoading()); 

            })
            .catch(() => {

                dispatch(userActions.updateLoginMessage("Unexpected error occured!", "error"));
                dispatch(hideLoading()); 

            })
            
        }
        else if (action.type === userActions.UPDATE_LOGIN_USERNAME) {            
            dispatch(userActions.updateLoginUsernameError(""));
        }
        else if (action.type === userActions.UPDATE_LOGIN_PASSWORD) {            
            dispatch(userActions.updateLoginPasswordError(""));
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