import { uiActions } from "../actions/ui";

const initialState = {         
    isAccountOptionsOpen: false,
    isLoginRememberMeChecked: false
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

        default:
            return state;
    }
};