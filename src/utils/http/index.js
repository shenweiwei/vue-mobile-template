import axios from 'axios';
import {
    requestInterceptor,
    responseInterceptor
} from './interceptors';
import {
    post,
    put,
    fetch,
    patch,
    request
} from './request';



axios.interceptors.request = requestInterceptor;
axios.interceptors.response = responseInterceptor;
axios.post = post;
axios.put = put;
axios.fetch = fetch;
axios.patch = patch;
axios.request = request;
export {
    axios
};