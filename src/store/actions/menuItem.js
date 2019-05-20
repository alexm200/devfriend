export const menuItemActions = {
    
    GET_MENU_ITEMS_REQUEST             : '[menuItem] Get Request',
    GET_MENU_ITEMS                     : '[menuItems] Get',
    CREATE_MENU_ITEM_REQUEST           : '[menuItem] Create Request',
    DELETE_MENU_ITEM_REQUEST           : '[menuItem] Delete Request',    
    ADD_MENU_ITEM                      : '[menuItems] Add',
    REMOVE_MENU_ITEM                   : '[menuItems] Remove',
    UPDATE_MENU_ITEM_REQUEST           : '[menuItem] Update Request',    
    UPDATE_MENU_ITEM                   : '[menuItem] Update',
    UPDATE_MENU_ITEMS_REQUEST          : '[menuItems] Update Request',
    UPDATE_MENU_ITEMS                  : '[menuItems] Update',

    getMenuItemsRequest : (userId) => ({
        type    : menuItemActions.GET_MENU_ITEMS_REQUEST,
        payload : {
            userId     : userId            
        }
    }),

    getMenuItems : (menuItems) => ({
        type    : menuItemActions.GET_MENU_ITEMS,
        payload : {
            menuItems   : menuItems
        }
    }),

    createMenuItemRequest : (userId, text, isHeader, hasDivider, icon, order, dateCreated) => ({
        type        : menuItemActions.CREATE_MENU_ITEM_REQUEST,
        payload: { 
            userId         : userId, 
            text           : text,
            isHeader       : isHeader,
            hasDivider     : hasDivider,
            icon           : icon,
            order          : order,
            dateCreated    : dateCreated
        }
    }),
    
    addMenuItem : (_id, userId, text, isHeader, hasDivider, icon, order, dateCreated) => ({
        type        : menuItemActions.ADD_MENU_ITEM,
        payload: {
            _id             : _id,
            userId          : userId,
            text            : text,
            isHeader        : isHeader,
            hasDivider      : hasDivider,
            icon            : icon,
            order           : order,
            dateCreated     : dateCreated
        }
    }),

    deleteMenuItemRequest : (_id) => ({
        type        : menuItemActions.DELETE_MENU_ITEM_REQUEST,
        payload: { 
            _id    : _id
        }
    }),    

    removeMenuItem : (_id) => ({
        type        : menuItemActions.REMOVE_MENU_ITEM,
        payload: {
            _id        : _id            
        }
    }),

    updateMenuItemRequest : (_id, menuItem) => ({
        type    : menuItemActions.UPDATE_MENU_ITEM_REQUEST,
        payload : {
            _id         : _id,
            menuItem    : menuItem
        }
    }),

    updateMenuItem : (_id, menuItem) => ({
        type    : menuItemActions.UPDATE_MENU_ITEM,
        payload : {
            _id         : _id,
            menuItem    : menuItem
        }
    }),

    updateMenuItemsRequest : (_ids, menuItems) => ({
        type    : menuItemActions.UPDATE_MENU_ITEMS_REQUEST,
        payload : {
            _ids         : _ids,
            menuItems    : menuItems
        }
    }),
    
    updateMenuItems : (_ids, menuItems) => ({
        type    : menuItemActions.UPDATE_MENU_ITEMS,
        payload : {
            _ids         : _ids,
            menuItems    : menuItems
        }
    }),

}