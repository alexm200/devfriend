import { userActions } from "../actions/user";
import { apiRequest } from "../actions/api.js";
import { gql_user } from "../graphql/user";

export const userMdl = [

    /*---------------------
        Register
    -----------------------*/
    ({dispatch}) => next => action => {
        next(action);

        if (action.type === userActions.CREATE_USER_REQUEST) {
            
            let isError = false;

            if (action.payload.username.trim() === ''){
                dispatch(userActions.updateUsernameError("Can not be empty!"));
                isError = true;                
            }

            if (action.payload.password.trim() === ''){
                dispatch(userActions.updatePasswordError("Can not be empty!"));
                isError = true;
            }

            if (isError){
                return;
            }

            //dispatch(showLoading());
            dispatch(apiRequest(gql_user.createUser(action.payload.username, action.payload.password), null, userActions.CREATE_USER_REQUEST_SUCCESS, userActions.CREATE_USER_REQUEST_ERROR));
        }
        else if (action.type === userActions.UPDATE_USERNAME) {
            dispatch(userActions.updateUsernameError(""));
        }
        else if (action.type === userActions.UPDATE_PASSWORD) {
            dispatch(userActions.updatePasswordError(""));
        }
        else if (action.type === userActions.CREATE_USER_REQUEST_SUCCESS) {
            dispatch(userActions.updateUsernameError(""));
            dispatch(userActions.updatePasswordError(""));
            dispatch(userActions.updateUsername(""));
            dispatch(userActions.updatePassword(""));
            dispatch(userActions.updateRegistrationMessage(`You are registered! {LoginLink} to continue!`));
            //dispatch(hideLoading());
        }
        else if (action.type === userActions.CREATE_USER_REQUEST_ERROR) {
            //dispatch(notificationActionCreators.ShowError('Error retrieving places'));
            //dispatch(hideLoading());        
        }    

    },

    /*---------------------
        Login User
    -----------------------*/
    ({dispatch}) => next => action => {
        next(action);

        if (action.type === userActions.LOGIN_USER_REQUEST) {
            //dispatch(showLoading());
            dispatch(apiRequest('GET', `/api/login`, null, null, userActions.LOGIN_USER_REQUEST_SUCCESS, userActions.LOGIN_USER_REQUEST_ERROR));
        }
        else if (action.type === userActions.LOGIN_USER_REQUEST_SUCCESS) {
            dispatch(userActions.updateUser(action.payload));
            //dispatch(hideLoading());
        }
        else if (action.type === userActions.LOGIN_USER_REQUEST_ERROR) {
            //dispatch(notificationActionCreators.ShowError('Error retrieving places'));
            //dispatch(hideLoading());        
        }    

    }
    
]