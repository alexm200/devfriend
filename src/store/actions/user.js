export const userActions = {

    LOGOUT_USER_REQUEST                : '[user] Logout Request',
    LOGOUT_USER                        : '[user] Logout',
    LOGIN_USER_REQUEST                 : '[user] Login Request',
    LOGIN_USER_REQUEST_SUCCESS         : '[user] Login Request Success',
    LOGIN_USER_REQUEST_ERROR           : '[user] Login Request Error',
    UPDATE_USER                        : '[user] Update',
    CREATE_USER                        : '[user] Create',
    CREATE_USER_REQUEST                : '[user] Create Request',
    CREATE_USER_REQUEST_SUCCESS        : '[user] Create Request Success',
    CREATE_USER_REQUEST_ERROR          : '[user] Create Request Error',
    UPDATE_REGISTRATION_USERNAME       : '[user] Update Registration Username',
    UPDATE_REGISTRATION_USERNAME_ERROR : '[user] Update Registration Username Error',
    UPDATE_REGISTRATION_PASSWORD       : '[user] Update Registration Password',
    UPDATE_REGISTRATION_PASSWORD_ERROR : '[user] Update Registration Password Error',
    UPDATE_REGISTRATION_MESSAGE        : '[user] Update Registration Message',
    UPDATE_LOGIN_USERNAME              : '[user] Update Login Username',
    UPDATE_LOGIN_USERNAME_ERROR        : '[user] Update Login Username Error',
    UPDATE_LOGIN_PASSWORD              : '[user] Update Login Password',    
    UPDATE_LOGIN_PASSWORD_ERROR        : '[user] Update Login Password Error',
    UPDATE_LOGIN_MESSAGE               : '[user] Update Login Message',
    LOGIN_USER                         : '[user] Login',
    GET_USER_REQUEST_SUCCESS           : '[user] Get Request Success',
    GET_USER_REQUEST_ERROR             : '[user] Get Request Error',

    updateLoginMessage : (message, type) => ({
        type    : userActions.UPDATE_LOGIN_MESSAGE,
        payload : {
            message : message,
            type    : type
        }
    }),

    loginUser : () => ({
        type    : userActions.LOGIN_USER
    }),

    logoutUserRequest : () => ({
        type    : userActions.LOGOUT_USER_REQUEST
    }),

    logoutUser : () => ({
        type    : userActions.LOGOUT_USER
    }),

    updateRegistrationMessage : (message, type) => ({
        type    : userActions.UPDATE_REGISTRATION_MESSAGE,
        payload : {
            message : message,
            type    : type
        }
    }),

    updateRegistrationPasswordError : (error) => ({
        type    : userActions.UPDATE_REGISTRATION_PASSWORD_ERROR,
        payload : {
            error : error
        }
    }),

    updateRegistrationPassword : (password) => ({
        type    : userActions.UPDATE_REGISTRATION_PASSWORD,
        payload : {
            password : password
        }
    }),

    updateRegistrationUsernameError : (error) => ({
        type    : userActions.UPDATE_REGISTRATION_USERNAME_ERROR,
        payload : {
            error : error
        }
    }),

    updateRegistrationUsername : (username) => ({
        type    : userActions.UPDATE_REGISTRATION_USERNAME,
        payload : {
            username : username
        }
    }),

    createUserRequest : (username, password) => ({
        type   : userActions.CREATE_USER_REQUEST,
        payload: { 
            username    : username, 
            password    : password 
        }
    }),

    createUser : (username, password) => ({
        type        : userActions.CREATE_USER,
        payload: { 
            username    : username, 
            password    : password 
        }
    }),

    updateLoginUsername : (username) => ({
        type    : userActions.UPDATE_LOGIN_USERNAME,
        payload : {
            username : username
        }
    }),

    updateLoginUsernameError : (error) => ({
        type    : userActions.UPDATE_LOGIN_USERNAME_ERROR,
        payload : {
            error : error
        }
    }),    

    updateLoginPassword : (password) => ({
        type    : userActions.UPDATE_LOGIN_PASSWORD,
        payload : {
            password : password
        }
    }),

    updateLoginPasswordError : (error) => ({
        type    : userActions.UPDATE_LOGIN_PASSWORD_ERROR,
        payload : {
            error : error
        }
    }),    

    loginUserRequest : (username, password, rememberMe) => ({
        type    : userActions.LOGIN_USER_REQUEST,
        payload: { 
            username    : username, 
            password    : password,
            rememberMe  : rememberMe
        }        
    }),

    updateUser : (data) => ({
        type   : userActions.UPDATE_USER,
        payload: data
    })
    
}