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
            
            sdk.cards.get({ userId: action.payload.userId, category: action.payload.category })
            .then((data) => {        
                
                dispatch(cardActions.getCards(data.cards));                
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

            sdk.cards.create(action.payload.userId, action.payload.category, action.payload.title, action.payload.text, action.payload.dateCreated)
            .then((data) => {
                
                const { _id, userId, category, text, title, dateCreated } = data.createCard;                

                dispatch(cardActions.addCard(_id, userId, category, title, text, dateCreated));
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
                        
            sdk.cards.remove(action.payload._id)
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
    
    /*---------------------
        Update
    -----------------------*/
    ({dispatch}) => next => action => {
        next(action);

        if (action.type === cardActions.UPDATE_CARD_REQUEST) {
            
            dispatch(showLoading());

            sdk.cards.update(action.payload._id, action.payload.card)
            .then((data) => {                                
                dispatch(hideLoading());
            })
            .catch(() => {
                dispatch(uiActions.showNotification("Unexpected error occured! Card could not be updated!", "error"));
                dispatch(hideLoading());
            });

        }        

    }, 

]