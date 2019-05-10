import { cardActions } from "../actions/card";
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import DevFriendSdk from '../../sdk/devfriend.sdk.js';
import config from '../../config.js';
import { uiActions } from "../actions/ui";

const sdk = new DevFriendSdk(config);

export const cardMdl = [

    /*---------------------
        Get
    -----------------------*/
    ({dispatch}) => next => action => {
        next(action);

        if (action.type === cardActions.GET_CARDS_REQUEST) {
            
            dispatch(showLoading());
            
            sdk.getCards(action.payload.user_id, action.payload.category)
            .then((data) => {        
                
                dispatch(cardActions.updateCards(data.cardsByCategory));                
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

        if (action.type === cardActions.CREATE_CARD_REQUEST) {
            
            dispatch(showLoading());
                        
            sdk.createCard(action.payload.user_id, action.payload.category, action.payload.title, action.payload.text)
            .then((data) => {
                
                const { _id, user_id, category, text, title } = data.createCard;                

                dispatch(cardActions.addCard(_id, user_id, category, text, title));
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

        if (action.type === cardActions.DELETE_CARD_REQUEST) {
            
            dispatch(showLoading());
                        
            sdk.deleteCard(action.payload._id)
            .then((data) => {
                
                const { _id } = data.deleteCard;

                dispatch(cardActions.removeCard(_id));
                dispatch(hideLoading());
                                
            })
            .catch(() => {
                dispatch(uiActions.showNotification("Unexpected error occured!", "error"));
                dispatch(hideLoading());
            });

        }   

    }, 
    
]