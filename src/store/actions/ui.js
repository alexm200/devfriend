export const uiActions = {

    OPEN_ACCOUNT_OPTIONS                 : '[ui] Open Account Options',
    CLOSE_ACCOUNT_OPTIONS                : '[ui] Close Account Options', 
    UPDATE_LOGIN_REMEMBER_ME             : '[ui] Update Login Remember me', 
    SHOW_NOTIFICATION                    : '[ui] Show notification', 
    HIDE_NOTIFICATION                    : '[ui] Hide notification',
    UPDATE_REGISTRATION_USERNAME_ERROR   : '[ui] Update Registration Username Error', 
    UPDATE_REGISTRATION_PASSWORD_ERROR   : '[ui] Update Registration Password Error',
    UPDATE_REGISTRATION_MESSAGE          : '[ui] Update Registration Message',
    UPDATE_LOGIN_USERNAME_ERROR          : '[ui] Update Login Username Error',    
    UPDATE_LOGIN_PASSWORD_ERROR          : '[ui] Update Login Password Error',
    UPDATE_LOGIN_MESSAGE                 : '[ui] Update Login Message',

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

    updateRegistrationUsernameError : (error) => ({
        type    : uiActions.UPDATE_REGISTRATION_USERNAME_ERROR,
        payload : {
            error : error
        }
    }),

    updateRegistrationPasswordError : (error) => ({
        type    : uiActions.UPDATE_REGISTRATION_PASSWORD_ERROR,
        payload : {
            error : error
        }
    }),
    
    updateRegistrationMessage : (message, type) => ({
        type    : uiActions.UPDATE_REGISTRATION_MESSAGE,
        payload : {
            message : message,
            type    : type
        }
    }),

    updateLoginUsernameError : (error) => ({
        type    : uiActions.UPDATE_LOGIN_USERNAME_ERROR,
        payload : {
            error : error
        }
    }),   

    updateLoginPasswordError : (error) => ({
        type    : uiActions.UPDATE_LOGIN_PASSWORD_ERROR,
        payload : {
            error : error
        }
    }),  

    updateLoginMessage : (message, type) => ({
        type    : uiActions.UPDATE_LOGIN_MESSAGE,
        payload : {
            message : message,
            type    : type
        }
    }),

}