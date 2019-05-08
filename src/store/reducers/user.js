import { userActions } from "../actions/user";

const initialState = {         
    registrationUsernameError: '', 
    registrationPasswordError: '',
    registrationUsername: '',
    registrationPassword: '', 
    registrationMessage: '',
    registrationMessageType: '',
    loginUsername: '',
    loginPassword: '',
    loginUsernameError: '',
    loginPasswordError: '',
    loginMessage: '',
    loginMessageType: '',
    isLoggedIn: false,
    isLoggedOut: false
};

export const userReducer = (state, action) => {
    state = state || initialState;

    switch(action.type) {

        case userActions.UPDATE_USER:
            return action.payload;

        case userActions.LOGIN_USER:
            return { ...state, isLoggedIn: true, isLoggedOut: true };

        case userActions.LOGOUT_USER:
            return { ...state, isLoggedOut: true, isLoggedIn: false };

        case userActions.UPDATE_REGISTRATION_USERNAME:
            return { ...state, registrationUsername: action.payload.username };

        case userActions.UPDATE_REGISTRATION_PASSWORD_ERROR:
            return { ...state, registrationPasswordError: action.payload.error };            

        case userActions.UPDATE_REGISTRATION_USERNAME_ERROR:
            return { ...state, registrationUsernameError: action.payload.error };

        case userActions.UPDATE_REGISTRATION_MESSAGE:
            return { ...state, registrationMessage: action.payload.message, registrationMessageType: action.payload.type };             

        case userActions.UPDATE_REGISTRATION_PASSWORD:
            return { ...state, registrationPassword: action.payload.password };

        case userActions.UPDATE_LOGIN_USERNAME:
            return { ...state, loginUsername: action.payload.username };

        case userActions.UPDATE_LOGIN_PASSWORD:
            return { ...state, loginPassword: action.payload.password };

        case userActions.UPDATE_LOGIN_USERNAME_ERROR:
            return { ...state, loginUsernameError: action.payload.error };

        case userActions.UPDATE_LOGIN_PASSWORD_ERROR:
            return { ...state, loginPasswordError: action.payload.error }; 

        case userActions.UPDATE_LOGIN_MESSAGE:
            return { ...state, loginMessage: action.payload.message, loginMessageType: action.payload.type };  

        default:
            return state;
    }
};