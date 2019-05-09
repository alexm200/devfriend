export const cardActions = {

    GET_CARDS_REQUEST                  : '[cards] Get Request',
    UPDATE_CARDS                       : '[cards] Update',        

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
    
}