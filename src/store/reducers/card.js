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
                    _id             : action.payload._id,
                    user_id         : action.payload.user_id,
                    category        : action.payload.category,
                    title           : action.payload.title,
                    text            : action.payload.text,
                    date_created    : action.payload.date_created
                }, ...state];

        case cardActions.REMOVE_CARD:
            return [...state].filter((i) => { return i._id !== action.payload._id });

        case cardActions.UPDATE_CARD:                
            return [...state].map((i) => {                 
                if (i._id !== action.payload._id){                    
                    return i;
                }
                else {
                    return {...i, ...action.payload.card};
                }                
            });

        default:
            return state;
    }
};