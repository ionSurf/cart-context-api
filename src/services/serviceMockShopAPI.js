import { jwtAuthHeader } from '../helpers';
//import { productsURI } from '../constants';
import { authService } from '.';

const baseURL = 'https://my-json-server.typicode.com/jubs16/Products/';
const productsURI = 'products/'

export const getAll = _ => {
    const requestOptions = {
        method: 'GET',
        headers: jwtAuthHeader
    }
    return fetch(`${baseURL + productsURI}`, requestOptions).then( handleResponse );
}

export const getById = id => {
  const requestOptions = {
      method: 'GET',
      headers: jwtAuthHeader
  }
  return fetch(`${baseURL + productsURI}${id}`, requestOptions).then( handleResponse );
}

const handleResponse = response => {
    return response.text().then((text) => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        if (response.status === 401) {
          // auto logout if 401 response returned from api
          authService.logout();
          window.location.reload(true);
        }
  
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
  
      return data;
    });
  };