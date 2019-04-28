import axios from 'axios';
import TraceKit from 'tracekit';

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

axios.defaults.timeout = 5000;
axios.defaults.baseURL = '';

export function request(config) {
    return new Promise((resolve, reject) => {
        axios(config).then(response => {
            resolve(response.data)
        }).catch(err => {
            TraceKit.report(err);
            reject(err)
        });
    });
}

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, params = {}, config = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
                params: params
            }, {
                timeout: config.timeout || axios.defaults.timeout
            })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                TraceKit.report(err);
                reject(err)
            })
    })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}, config = {}) {
    console.log(url);
    return new Promise((resolve, reject) => {
        axios.post(url, data, {
                timeout: config.timeout || axios.defaults.timeout
            })
            .then(response => {
                resolve(response.data);
            }, err => {
                TraceKit.report(err);
                reject(err)
            })
    })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}, config = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data, {
                timeout: config.timeout || axios.defaults.timeout
            })
            .then(response => {
                resolve(response.data);
            }, err => {
                TraceKit.report(err);
                reject(err)
            })
    })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}, config = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data, {
                timeout: config.timeout || axios.defaults.timeout
            })
            .then(response => {
                resolve(response.data);
            }, err => {
                TraceKit.report(err);
                reject(err)
            })
    })
}