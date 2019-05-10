import { cardActions } from "../actions/card";

const initialState = [];

export const cardReducer = (state, action) => {
    state = state || initialState;

    switch(action.type) {

        case cardActions.UPDATE_CARDS:        
            return action.payload.cards;

        case cardActions.ADD_CARD:
            return [ 
                { 
                    _id         : action.payload._id,
                    user_id     : action.payload.user_id,
                    category    : action.payload.category,
                    title       : action.payload.title,
                    text        : action.payload.text
                }, ...state];

            case cardActions.REMOVE_CARD:
                return [...state].filter((i) => { return i._id !== action.payload._id });                

        default:
            return state;
    }
};