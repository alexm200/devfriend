export const userActions = {

    LOGIN_USER_REQUEST                 : '[user] Login Request',
    LOGIN_USER_REQUEST_SUCCESS         : '[user] Login Request Success',
    LOGIN_USER_REQUEST_ERROR           : '[user] Login Request Error',
    UPDATE_USER                        : '[user] Update',

    loginUserRequest : () => ({
        type    : userActions.LOGIN_USER_REQUEST
    }),

    updateUser : (data) => ({
        type   : userActions.UPDATE_USER,
        payload: data
    })
    
}