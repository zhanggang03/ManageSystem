/**
 * 基于axios的AJAX工具
 */
import axios from 'axios';
const qs = require('qs');
export default axios;
//注：qs，使用axios，必须得安装 qs，所有的Post 请求，我们都需要 qs,对参数进行序列化

// 设置默认请求根路径
axios.defaults.baseURL = '/rest';

//request拦截器,可以用于添加请求令牌
axios.interceptors.request.use(
    config => {
        config.timeout = 6000;
        if (false) config.headers.Authorization = 'token';
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

//response拦截器
axios.interceptors.response.use(
    res => {
        return res.data;
    },
    err => {
        return Promise.reject(err);
    }
);
