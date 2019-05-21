export const userActions = {

    LOGOUT_USER_REQUEST                : '[user] Logout Request',
    LOGOUT_USER                        : '[user] Logout',
    LOGIN_USER_REQUEST                 : '[user] Login Request',        
    UPDATE_USER                        : '[user] Update',
    CREATE_USER                        : '[user] Create',
    CREATE_USER_REQUEST                : '[user] Create Request',        
    UPDATE_REGISTRATION_USERNAME       : '[user] Update Registration Username',    
    UPDATE_REGISTRATION_PASSWORD       : '[user] Update Registration Password',        
    UPDATE_LOGIN_USERNAME              : '[user] Update Login Username',    
    UPDATE_LOGIN_PASSWORD              : '[user] Update Login Password',
    LOGIN_USER                         : '[user] Login',

    loginUser : (userId, username) => ({
        type    : userActions.LOGIN_USER,
        payload : {
            userId : userId,
            username : username
        }
    }),

    logoutUserRequest : () => ({
        type    : userActions.LOGOUT_USER_REQUEST
    }),

    logoutUser : () => ({
        type    : userActions.LOGOUT_USER
    }),

    updateRegistrationPassword : (password) => ({
        type    : userActions.UPDATE_REGISTRATION_PASSWORD,
        payload : {
            password : password
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

    updateLoginPassword : (password) => ({
        type    : userActions.UPDATE_LOGIN_PASSWORD,
        payload : {
            password : password
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