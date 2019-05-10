export const uiActions = {

    OPEN_ACCOUNT_OPTIONS                 : '[ui] Open Account Options',
    CLOSE_ACCOUNT_OPTIONS                : '[ui] Close Account Options', 
    UPDATE_LOGIN_REMEMBER_ME             : '[ui] Update Login Remember me', 
    SHOW_NOTIFICATION                    : '[ui] Show notification', 
    HIDE_NOTIFICATION                    : '[ui] Hide notification', 

    openAccountOptions : () => ({
        type    : uiActions.OPEN_ACCOUNT_OPTIONS        
    }),
    
    closeAccountOptions : () => ({
        type    : uiActions.CLOSE_ACCOUNT_OPTIONS        
    }),

    updateLoginRememberMe : (checked) => ({
        type    : uiActions.UPDATE_LOGIN_REMEMBER_ME,
        payload : {
            checked : checked
        }        
    }),

    showNotification : (message, type) => ({
        type    : uiActions.SHOW_NOTIFICATION,
        payload : {            
            message : message,
            type    : type
        }
    }),

    hideNotification : () => ({
        type    : uiActions.HIDE_NOTIFICATION        
    }),     

}