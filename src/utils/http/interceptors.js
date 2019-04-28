import axios from 'axios';
import TraceKit from 'tracekit';

//http request 拦截器
const requestInterceptor = axios.interceptors.request;
const responseInterceptor = axios.interceptors.response;
requestInterceptor.use(
    config => {
        // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
        config.data = JSON.stringify(config.data);
        config.headers = {
            // 'Content-Type': 'application/x-www-form-urlencoded'
            'Content-Type': 'application/json'
        }
        // if(token){
        //   config.params = {'token':token}
        // }
        return config;
    },
    err => {
        TraceKit.report(err);
        return Promise.reject(err);
    }
);


//http response 拦截器
responseInterceptor.use(
    response => {
        if (response.data.errCode == 2) {
            this.$router.push({
                path: "/login",
                querry: {
                    redirect: this.$router.currentRoute.fullPath
                } //从哪个页面跳转
            })
        }
        return response;
    },
    err => {
        TraceKit.report(err);
        return Promise.reject(err);
    }
)

export {
    requestInterceptor,
    responseInterceptor
};