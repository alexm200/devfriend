
export const utils = {    
    getUserFromStorage : () => {
        const user = localStorage.getItem('user') || sessionStorage.getItem('user');        
        return user == null ? null : JSON.parse(user);        
    },
    getDateFormat : (date) => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2);
    }
}