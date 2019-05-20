import { menuItemActions } from "../actions/menuItem";
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import DevFriendSdk from '../../sdk/devfriend.sdk.js';
import config from '../../config.js';
import { uiActions } from "../actions/ui";

const sdk = new DevFriendSdk(config);

export const menuItemMdl = [

    /*---------------------
        Get
    -----------------------*/
    ({dispatch}) => next => action => {
        next(action);

        if (action.type === menuItemActions.GET_MENU_ITEMS_REQUEST) {
            
            dispatch(showLoading());
            
            sdk.menuItems.get({ userId: action.payload.userId })
            .then((data) => {
                
                dispatch(menuItemActions.getMenuItems(data.menuItems));
                dispatch(hideLoading());  
                
            })
            .catch(() => {
                dispatch(uiActions.showNotification("Unexpected error occured!", "error"));
                dispatch(hideLoading());
            });

        }

    },

    /*---------------------
        Create
    -----------------------*/
    ({dispatch}) => next => action => {
        next(action);

        if (action.type === menuItemActions.CREATE_MENU_ITEM_REQUEST) {
            
            dispatch(showLoading());                    

            sdk.menuItems.create(action.payload.userId, action.payload.text, action.payload.isHeader, action.payload.hasDivider, action.payload.icon, action.payload.order, action.payload.dateCreated)
            .then((data) => {
                                
                const { _id, userId, text, isHeader, hasDivider, icon, order, dateCreated } = data.createMenuItem;

                dispatch(menuItemActions.addMenuItem(_id, userId, text, isHeader, hasDivider, icon, order, dateCreated));
                dispatch(hideLoading());
                                
            })
            .catch(() => {
                dispatch(uiActions.showNotification("Unexpected error occured!", "error"));
                dispatch(hideLoading());
            });

        }   

    },    

    /*---------------------
        Delete
    -----------------------*/
    ({dispatch}) => next => action => {
        next(action);

        if (action.type === menuItemActions.DELETE_MENU_ITEM_REQUEST) {
            
            dispatch(showLoading());
                        
            sdk.menuItems.remove(action.payload._id)
            .then((data) => {
                
                const { _id } = data.deleteMenuItem;

                dispatch(menuItemActions.removeMenuItem(_id));
                dispatch(hideLoading());
                                
            })
            .catch(() => {
                dispatch(uiActions.showNotification("Unexpected error occured!", "error"));
                dispatch(hideLoading());
            });

        }   

    }, 
    
    /*---------------------
        Update
    -----------------------*/
    ({dispatch}) => next => action => {
        next(action);

        if (action.type === menuItemActions.UPDATE_MENU_ITEM_REQUEST) {
            
            dispatch(showLoading());

            sdk.menuItems.update(action.payload._id, action.payload.menuItem)
            .then((data) => {

                dispatch(menuItemActions.updateMenuItem(action.payload._id, action.payload.menuItem));
                dispatch(hideLoading());
            })
            .catch(() => {
                dispatch(uiActions.showNotification("Unexpected error occured! Menu Item could not be updated!", "error"));
                dispatch(hideLoading());
            });

        }        

    }, 

    /*---------------------
        Update Many
    -----------------------*/
    ({dispatch}) => next => action => {
        next(action);

        if (action.type === menuItemActions.UPDATE_MENU_ITEMS_REQUEST) {

            dispatch(showLoading());

            sdk.menuItems.updateMany(action.payload._ids, action.payload.menuItems)
            .then((data) => {

                dispatch(menuItemActions.updateMenuItems(action.payload._ids, action.payload.menuItems));
                dispatch(hideLoading());
            })
            .catch((err) => {
                console.log(err);
                dispatch(uiActions.showNotification("Unexpected error occured! Menu Item could not be updated!", "error"));
                dispatch(hideLoading());
            });

        }        

    },     

]