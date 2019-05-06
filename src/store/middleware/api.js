import axios from 'axios';
import { API_REQUEST } from "../actions/api";

export const api = ({dispatch}) => next => action => {
  if (action.type === API_REQUEST) {

    console.log(process.env);

    const { method, url, data, onSuccess, onError } = action.meta;    
    axios({ 
        method: method,
        url: url,
        data: action.payload,
        headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => { dispatch({ type: onSuccess, payload: response.data, meta: data }); })
    .catch((error) => { dispatch({ type: onError, payload: error }); });    
  }
  return next(action)
};