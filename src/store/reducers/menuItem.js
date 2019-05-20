import { menuItemActions } from "../actions/menuItem";

const initialState = [];

export const menuItemReducer = (state, action) => {
    state = state || initialState;

    switch(action.type) {

        case menuItemActions.GET_MENU_ITEMS:
            return action.payload.menuItems;

        case menuItemActions.ADD_MENU_ITEM:
            return [ 
                { 
                    _id             : action.payload._id,
                    userId          : action.payload.userId,
                    text            : action.payload.text,
                    isHeader        : action.payload.isHeader,
                    hasDivider      : action.payload.hasDivider,
                    icon            : action.payload.icon,
                    order           : action.payload.order,
                    dateCreated     : action.payload.dateCreated
                }, ...state];

        case menuItemActions.REMOVE_MENU_ITEM:
            return [...state].filter((i) => { return i._id !== action.payload._id });

        case menuItemActions.UPDATE_MENU_ITEM:
            return [...state].map((i) => {                 
                if (i._id !== action.payload._id){                    
                    return i;
                }
                else {
                    return {...i, ...action.payload.menuItem};
                }                
            });

        case menuItemActions.UPDATE_MENU_ITEMS:            
            return [...state].map((i) => {
                let index = action.payload._ids.indexOf(i._id);                
                if (index > -1) {
                    return {...i, ...action.payload.menuItems[index]};
                }
                else {
                    return i;
                }
            });

        default:
            return state;
    }
};