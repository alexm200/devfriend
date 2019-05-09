import { cardActions } from "../actions/card";
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import DevFriendSdk from '../../sdk/devfriend.sdk.js';
import config from '../../config.js';

const sdk = new DevFriendSdk(config);

export const cardMdl = [

    /*---------------------
        Get
    -----------------------*/
    ({dispatch}) => next => action => {
        next(action);

        if (action.type === cardActions.GET_CARDS_REQUEST) {
            
            dispatch(showLoading());
            
            // Check username already exists
            sdk.getCards(action.payload.user_id, action.payload.category)
            .then((data) => {
                                
                dispatch(cardActions.updateCards(data.cardsByCategory));                
                dispatch(hideLoading());  
                
            })
            .catch(() => {
                //dispatch(userActions.updateRegistrationMessage("Unexpected error occured!", "error"));
                dispatch(hideLoading());
            });

        }

    }, 
    
]