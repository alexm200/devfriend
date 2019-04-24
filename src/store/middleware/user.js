import { userActions } from "../actions/user";
import { apiRequest, endpoint_url } from "../actions/api.js";

export const userMdl = [

    /*---------------------
        Login User
    -----------------------*/
    ({dispatch}) => next => action => {
        next(action);

        if (action.type === userActions.LOGIN_USER_REQUEST) {
            //dispatch(showLoading());
            dispatch(apiRequest('GET', `${endpoint_url}/api/login`, null, null, userActions.LOGIN_USER_REQUEST_SUCCESS, userActions.LOGIN_USER_REQUEST_ERROR));
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