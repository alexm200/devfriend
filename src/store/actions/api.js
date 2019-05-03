export const API_REQUEST = '[api] Api Request';

const isDevelopment = process.env.NODE_ENV === 'development';
const endpoint_url = isDevelopment ? "http://localhost:4000/graphql" : "http://devfriendapi.herokuapp.com/graphql";

export const apiRequest = (body, data, onSuccess, onError) => ({
  type: API_REQUEST,
  payload: JSON.stringify(body),
  meta: { method: "POST", url : endpoint_url, data, onSuccess, onError }
});