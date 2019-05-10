import { uiActions } from "../actions/ui";

const initialState = {         
    isAccountOptionsOpen: false,
    isLoginRememberMeChecked: false,
    notifications: []
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

        default:
            return state;
    }
};