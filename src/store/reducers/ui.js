import { uiActions } from "../actions/ui";

const initialState = {         
    isAccountOptionsOpen: false,    
};

export const uiReducer = (state, action) => {
    state = state || initialState;

    switch(action.type) {

        case uiActions.OPEN_ACCOUNT_OPTIONS:        
            return { ...state, isAccountOptionsOpen: true };

        case uiActions.CLOSE_ACCOUNT_OPTIONS:
            return { ...state, isAccountOptionsOpen: false };

        default:
            return state;
    }
};