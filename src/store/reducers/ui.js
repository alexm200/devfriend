import { uiActions } from "../actions/ui";

const initialState = {         
    isAccountOptionsOpen: false,
    isLoginRememberMeChecked: false,
    notifications: [],
    registrationUsernameError: '', 
    registrationPasswordError: '',
    registrationMessage: '',
    registrationMessageType: '',
    loginUsernameError: '',
    loginPasswordError: '',
    loginMessage: '',
    loginMessageType: '',    
};

export const uiReducer = (state, action) => {
    state = state || initialState;

    switch(action.type) {

        case uiActions.OPEN_ACCOUNT_OPTIONS:        
            return { ...state, isAccountOptionsOpen: true };

        case uiActions.CLOSE_ACCOUNT_OPTIONS:
            return { ...state, isAccountOptionsOpen: false };

        case uiActions.UPDATE_LOGIN_REMEMBER_ME:
            return { ...state, isLoginRememberMeChecked: action.payload.checked };

        case uiActions.SHOW_NOTIFICATION:
            return { ...state, 
                notifications: [
                    { message: action.payload.message, type: action.payload.type },
                    ...state.notifications
                ] 
            };

        case uiActions.HIDE_NOTIFICATION:
            return { ...state, 
                notifications: [
                    ...state.notifications.slice(0, state.notifications.length - 1)                     
                ] 
            };

        case uiActions.UPDATE_REGISTRATION_USERNAME_ERROR:
            return { ...state, registrationUsernameError: action.payload.error };            

        case uiActions.UPDATE_REGISTRATION_PASSWORD_ERROR:
            return { ...state, registrationPasswordError: action.payload.error };    

        case uiActions.UPDATE_REGISTRATION_MESSAGE:
            return { ...state, registrationMessage: action.payload.message, registrationMessageType: action.payload.type };   

        case uiActions.UPDATE_LOGIN_USERNAME_ERROR:
            return { ...state, loginUsernameError: action.payload.error };

        case uiActions.UPDATE_LOGIN_PASSWORD_ERROR:
            return { ...state, loginPasswordError: action.payload.error }; 

        case uiActions.UPDATE_LOGIN_MESSAGE:
            return { ...state, loginMessage: action.payload.message, loginMessageType: action.payload.type }; 

        default:
            return state;
    }
};