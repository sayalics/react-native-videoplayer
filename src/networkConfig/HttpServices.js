import axios, {CancelTokenSource} from 'axios';
import {getAccessToken} from './AsyncStorageService';

const AUTHORIZATION = 'AUTHORIZATION';
const axiosInstance = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 20000,
});

axiosInstance.interceptors.response.use(
  response => response,
  error => error,
);
axiosInstance.interceptors.request.use(async config => {
  //   config.baseURL = await getBaseUrl();
  //   config.cancelToken = cancelSource.getSource().token;
  //   config.headers[AUTHORIZATION] = await getAccessToken();
  return config;
});

export default class HTTPService {
  static get(url, params, callBack) {
    return new Promise((resolve, reject) => {
      axiosInstance
        .get(url, {params: params})
        .then(response => {
          resolve(response);
          callBack(response);
        })
        .catch(error => {
          reject(error);
          callBack(error);
        });
    });
  }

  static put(url, body) {
    return new Promise((resolve, reject) => {
      axiosInstance
        .put(url, body)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }

  static post(url, body) {
    return new Promise((resolve, reject) => {
      axiosInstance
        .post(url, body)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }

  static delete(url, body) {
    return new Promise((resolve, reject) => {
      axiosInstance
        .delete(url, {data: body})
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }
}
