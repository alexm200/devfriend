import { userActions } from "../actions/user";

const initialState = { username: '', password: '', usernameError: '', passwordError: '' };

export const userReducer = (state, action) => {
    state = state || initialState;

    switch(action.type) {
        case userActions.UPDATE_USER:
            return action.payload;
        case userActions.UPDATE_USERNAME:
            return { ...state, username: action.payload.username };
        case userActions.UPDATE_PASSWORD_ERROR:
            return { ...state, passwordError: action.payload.error };            
        case userActions.UPDATE_USERNAME_ERROR:
            return { ...state, usernameError: action.payload.error };            
        case userActions.UPDATE_PASSWORD:
            return { ...state, password: action.payload.password };
        default:
            return state;
    }
};