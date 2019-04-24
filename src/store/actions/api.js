export const API_REQUEST = '[api] Api Request';

const isDevelopment = process.env.NODE_ENV === 'development';
export const endpoint_url = isDevelopment ? "http://localhost:3001" : ".";

export const apiRequest = (method, url, body, data, onSuccess, onError) => ({
  type: API_REQUEST,
  payload: body,
  meta: { method, url, data, onSuccess, onError }
});