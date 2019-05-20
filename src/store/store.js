import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { userReducer } from './reducers/user';
import { uiReducer } from './reducers/ui';
import { cardReducer } from './reducers/card';
import { menuItemReducer } from './reducers/menuItem';
import { userMdl } from "./middleware/user";
import { cardMdl } from "./middleware/card";
import { menuItemMdl } from "./middleware/menuItem";
import { uiMdl } from "./middleware/ui";

export default function configureStore(history, initialState) {
  const reducers = {
    user: userReducer,
    card: cardReducer,
    menuItem: menuItemReducer,
    ui: uiReducer,
    loadingBar: loadingBarReducer      
  };

  const middleware = [    
    ...userMdl,
    ...cardMdl,
    ...menuItemMdl,
    ...uiMdl
  ];

  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (isDevelopment && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  const rootReducer = combineReducers({
    ...reducers
  });

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  );
}