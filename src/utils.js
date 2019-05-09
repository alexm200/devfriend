
export const utils = {
    Category : Object.freeze({"Javascript":"Javascript", "Css":"Css"}),
    isUserLoggedIn : () => {
        return localStorage.getItem('user') || sessionStorage.getItem('user');    
    },
    getUserId : () => {
        return localStorage.getItem('user') || sessionStorage.getItem('user');    
    }
}