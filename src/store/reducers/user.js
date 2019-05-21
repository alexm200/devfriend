import { userActions } from "../actions/user";

const initialState = {                 
    registrationUsername: '',
    registrationPassword: '',         
    loginUsername: '',
    loginPassword: '',
    userId: '',
    username: '',
    isLoggedIn: false,
    isLoggedOut: false
};

export const userReducer = (state, action) => {
    state = state || initialState;

    switch(action.type) {

        case userActions.UPDATE_USER:
            return action.payload;

        case userActions.LOGIN_USER:
            return { ...state, username: action.payload.username, userId: action.payload.userId, isLoggedIn: true, isLoggedOut: true };

        case userActions.LOGOUT_USER:
            return { ...state, username: '', userId: '', isLoggedOut: true, isLoggedIn: false };

        case userActions.UPDATE_REGISTRATION_USERNAME:
            return { ...state, registrationUsername: action.payload.username };

        case userActions.UPDATE_REGISTRATION_PASSWORD:
            return { ...state, registrationPassword: action.payload.password };

        case userActions.UPDATE_LOGIN_USERNAME:
            return { ...state, loginUsername: action.payload.username };

        case userActions.UPDATE_LOGIN_PASSWORD:
            return { ...state, loginPassword: action.payload.password }; 

        default:
            return state;
    }
};