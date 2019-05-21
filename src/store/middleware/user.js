import { userActions } from "../actions/user";
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import DevFriendSdk from '../../sdk/devfriend.sdk.js';
import config from '../../config.js';
import { menuItemActions } from "../actions/menuItem";
import { uiActions } from "../actions/ui";

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
                dispatch(uiActions.updateRegistrationUsernameError("Can not be empty!"));
                isError = true;                
            }

            // Check empty password
            if (action.payload.password.trim() === ''){
                dispatch(uiActions.updateRegistrationPasswordError("Can not be empty!"));
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
                    dispatch(uiActions.updateRegistrationMessage("Username already exists!", "error"));
                    dispatch(hideLoading());
                }
                else {
                    
                    // Create user
                    sdk.users.create(action.payload.username, action.payload.password, false)
                    .then((data) => {

                        dispatch(uiActions.updateRegistrationUsernameError(""));
                        dispatch(uiActions.updateRegistrationPasswordError(""));
                        dispatch(userActions.updateRegistrationUsername(""));
                        dispatch(userActions.updateRegistrationPassword(""));
                        
                        const { _id, username } = data.createUser;
                        sessionStorage.setItem("user", JSON.stringify({ userId: _id, username: username }));
                        dispatch(userActions.loginUser(_id, username));                        
                        
                        dispatch(hideLoading());  

                    })
                    .catch(() => {

                        dispatch(uiActions.updateRegistrationMessage("Unexpected error occured!", "error"));
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
            dispatch(uiActions.updateRegistrationUsernameError(""));
        }
        else if (action.type === userActions.UPDATE_REGISTRATION_PASSWORD) {
            dispatch(uiActions.updateRegistrationPasswordError(""));
        }   

    },

    /*---------------------
        Login
    -----------------------*/
    ({dispatch}) => next => action => {
        next(action);

        if (action.type === userActions.LOGIN_USER_REQUEST) {
            
            dispatch(uiActions.updateLoginMessage(""));
            dispatch(uiActions.updateLoginUsernameError(""));
            dispatch(uiActions.updateLoginPasswordError(""));

            let isError = false;
            
            // Check empty username
            if (action.payload.username.trim() === ''){
                dispatch(uiActions.updateLoginUsernameError("Can not be empty!"));
                isError = true;                
            }

            // Check empty password
            if (action.payload.password.trim() === ''){
                dispatch(uiActions.updateLoginPasswordError("Can not be empty!"));
                isError = true;
            }

            if (isError){
                return;
            }

            dispatch(showLoading());

            // Get user
            sdk.users.get({ username: action.payload.username, password: action.payload.password })
            .then((data) => {
                
                dispatch(uiActions.updateLoginUsernameError(""));
                dispatch(uiActions.updateLoginPasswordError(""));
                dispatch(userActions.updateLoginUsername(""));
                dispatch(userActions.updateLoginPassword(""));
                dispatch(uiActions.updateLoginMessage(""));
                
                if (data.users.length > 0) {
                    const { _id, username } = data.users[0];
                    if (action.payload.rememberMe) {
                        localStorage.setItem("user", JSON.stringify({ userId: _id, username: username }));
                    }
                    else {
                        sessionStorage.setItem("user", JSON.stringify({ userId: _id, username: username }));
                    }                    
                    dispatch(userActions.loginUser(_id, username));
                    dispatch(menuItemActions.getMenuItemsRequest(_id));
                }
                else{
                    dispatch(uiActions.updateLoginMessage("Incorrect Username/Password!", "error"));
                }
                
                dispatch(hideLoading()); 

            })
            .catch(() => {                
                dispatch(uiActions.updateLoginMessage("Unexpected error occured!", "error"));
                dispatch(hideLoading()); 

            })
            
        }
        else if (action.type === userActions.UPDATE_LOGIN_USERNAME) {            
            dispatch(uiActions.updateLoginUsernameError(""));
        }
        else if (action.type === userActions.UPDATE_LOGIN_PASSWORD) {            
            dispatch(uiActions.updateLoginPasswordError(""));
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