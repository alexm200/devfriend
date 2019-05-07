export const uiActions = {

    OPEN_ACCOUNT_OPTIONS                 : '[ui] Open Account Options',
    CLOSE_ACCOUNT_OPTIONS                : '[ui] Close Account Options', 

    openAccountOptions : () => ({
        type    : uiActions.OPEN_ACCOUNT_OPTIONS        
    }),
    
    closeAccountOptions : () => ({
        type    : uiActions.CLOSE_ACCOUNT_OPTIONS        
    }),

}