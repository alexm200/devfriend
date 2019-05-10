import { uiActions } from "../actions/ui";

export const uiMdl = [

    /*---------------------
        Notification
    -----------------------*/
    ({dispatch}) => next => action => {
        next(action);

        if (action.type === uiActions.SHOW_NOTIFICATION) {

            setTimeout(function() {
                dispatch(uiActions.hideNotification());
            }, 5000);

        }  

    },    
    
]