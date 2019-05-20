export const cardActions = {

    GET_CARDS_REQUEST                  : '[cards] Get Request',
    GET_CARDS                          : '[cards] Get',
    CREATE_CARD_REQUEST                : '[cards] Create Request',
    DELETE_CARD_REQUEST                : '[cards] Delete Request',    
    ADD_CARD                           : '[cards] Add',
    REMOVE_CARD                        : '[cards] Remove',
    UPDATE_CARD_REQUEST                : '[card] Update Request',
    UPDATE_CARD                        : '[card] Update',

    getCardsRequest : (userId, category) => ({
        type    : cardActions.GET_CARDS_REQUEST,
        payload : {
            userId     : userId,
            category    : category
        }
    }),

    getCards : (cards) => ({
        type    : cardActions.GET_CARDS,
        payload : {
            cards   : cards
        }
    }),

    createCardRequest : (userId, category, title, text, dateCreated) => ({
        type        : cardActions.CREATE_CARD_REQUEST,
        payload: { 
            userId         : userId,
            category        : category,
            title           : title,
            text            : text,
            dateCreated    : dateCreated
        }
    }),
    
    addCard : (_id, userId, category, title, text, dateCreated) => ({
        type        : cardActions.ADD_CARD,
        payload: {
            _id             : _id,
            userId         : userId, 
            category        : category,
            title           : title,
            text            : text,
            dateCreated    : dateCreated
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

    updateCardRequest : (_id, card) => ({
        type    : cardActions.UPDATE_CARD_REQUEST,
        payload : {
            _id     : _id,
            card    : card
        }
    }),

    updateCard : (_id, card) => ({
        type    : cardActions.UPDATE_CARD,
        payload : {
            _id     : _id,
            card    : card
        }
    }),

}