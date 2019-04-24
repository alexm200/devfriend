import { userActions } from "../actions/user";

const initialState = { isLoggedIn : false };

export const userReducer = (state, action) => {
    state = state || initialState;

    switch(action.type) {
        case userActions.UPDATE_USER:
            return action.payload;        
        default:
            return state;
    }
};