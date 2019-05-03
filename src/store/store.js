import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
//import { loadingBarReducer } from 'react-redux-loading-bar'
import { userReducer } from './reducers/user';
//import { notificationReducer } from './reducers/notification';
import { api } from "./middleware/api";
import {  userMdl } from "./middleware/user";

export default function configureStore(history, initialState) {
  const reducers = {
    user: userReducer,
    //notification: notificationReducer,    
    //loadingBar: loadingBarReducer
  };

  const middleware = [
    api,
    ...userMdl
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