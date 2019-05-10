export const cardActions = {

    GET_CARDS_REQUEST                  : '[cards] Get Request',
    CREATE_CARD_REQUEST                : '[cards] Create Request',
    DELETE_CARD_REQUEST                : '[cards] Delete Request',
    UPDATE_CARDS                       : '[cards] Update',
    ADD_CARD                           : '[cards] Add',
    REMOVE_CARD                        : '[cards] Remove',

    getCardsRequest : (user_id, category) => ({
        type    : cardActions.GET_CARDS_REQUEST,
        payload : {
            user_id     : user_id,
            category    : category
        }
    }),

    updateCards : (cards) => ({
        type    : cardActions.UPDATE_CARDS,
        payload : {
            cards   : cards
        }
    }),

    createCardRequest : (user_id, category, title, text) => ({
        type        : cardActions.CREATE_CARD_REQUEST,
        payload: { 
            user_id    : user_id, 
            category   : category,
            title      : title,
            text       : text
        }
    }),
    
    addCard : (_id, user_id, category, title, text) => ({
        type        : cardActions.ADD_CARD,
        payload: {
            _id        : _id,
            user_id    : user_id, 
            category   : category,
            title      : title,
            text       : text
        }
    }),

    deleteCardRequest : (_id) => ({
        type        : cardActions.DELETE_CARD_REQUEST,
        payload: { 
            _id    : _id            
        }
    }),    

    removeCard : (_id) => ({
        type        : cardActions.REMOVE_CARD,
        payload: {
            _id        : _id            
        }
    }),

}