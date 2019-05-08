
export const utils = {
    isUserLoggedIn : () => {
        return localStorage.getItem('user') || sessionStorage.getItem('user');    
    }
}