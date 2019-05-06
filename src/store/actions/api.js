export const API_REQUEST = '[api] Api Request';

const endpoint_url = process.env.REACT_APP_ENV === 'production' ? "http://devfriendapi.herokuapp.com/graphql" : "http://localhost:4000/graphql";

export const apiRequest = (body, data, onSuccess, onError) => ({
  type: API_REQUEST,
  payload: JSON.stringify(body),
  meta: { method: "POST", url : endpoint_url, data, onSuccess, onError }
});