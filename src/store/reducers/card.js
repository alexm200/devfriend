import { cardActions } from "../actions/card";

const initialState = [];

export const cardReducer = (state, action) => {
    state = state || initialState;

    switch(action.type) {

        case cardActions.UPDATE_CARDS:        
            return action.payload.cards;

        default:
            return state;
    }
};