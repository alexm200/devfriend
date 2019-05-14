
export const utils = {
    Category : Object.freeze({"Javascript":"Javascript", "Css":"Css", "Html":"Html", "Sql":"Sql"}),
    isUserLoggedIn : () => {
        return localStorage.getItem('user') || sessionStorage.getItem('user');    
    },
    getUserId : () => {
        return localStorage.getItem('user') || sessionStorage.getItem('user');    
    },
    getDateFormat : (date) => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2);
    }
}