export const userActions = {

    LOGIN_USER_REQUEST                 : '[user] Login Request',
    LOGIN_USER_REQUEST_SUCCESS         : '[user] Login Request Success',
    LOGIN_USER_REQUEST_ERROR           : '[user] Login Request Error',
    UPDATE_USER                        : '[user] Update',
    CREATE_USER                        : '[user] Create',
    CREATE_USER_REQUEST                : '[user] Create Request',
    CREATE_USER_REQUEST_SUCCESS        : '[user] Create Request Success',
    CREATE_USER_REQUEST_ERROR          : '[user] Create Request Error',
    UPDATE_USERNAME                    : '[user] Update Username',
    UPDATE_USERNAME_ERROR              : '[user] Update Username Error',
    UPDATE_PASSWORD                    : '[user] Update Password',
    UPDATE_PASSWORD_ERROR              : '[user] Update Password Error',
    UPDATE_REGISTRATION_MESSAGE        : '[user] Update Registration Message',

    updateRegistrationMessage : (message) => ({
        type    : userActions.UPDATE_REGISTRATION_MESSAGE,
        payload : {
            message : message
        }
    }),

    updatePasswordError : (error) => ({
        type    : userActions.UPDATE_PASSWORD_ERROR,
        payload : {
            error : error
        }
    }),

    updatePassword : (password) => ({
        type    : userActions.UPDATE_PASSWORD,
        payload : {
            password : password
        }
    }),

    updateUsernameError : (error) => ({
        type    : userActions.UPDATE_USERNAME_ERROR,
        payload : {
            error : error
        }
    }),

    updateUsername : (username) => ({
        type    : userActions.UPDATE_USERNAME,
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

    loginUserRequest : () => ({
        type    : userActions.LOGIN_USER_REQUEST
    }),

    updateUser : (data) => ({
        type   : userActions.UPDATE_USER,
        payload: data
    })
    
}