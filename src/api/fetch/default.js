import axios from 'axios';
import Qs from 'qs'; //这是qs插件 npm安装即可这里引用

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.headers.common['Authorization'] = 'Basic YWRtaW46YWRtaW4=';
// axios.defaults.baseURL = baseUrl;
// axios.defaults.withCredentials = true;

// 创建axios实例
const service = axios.create({
    transformRequest: [function(data) {
        return Qs.stringify(data);
    }],
    timeout: 50000, // 请求超时时间
});

// request拦截器
service.interceptors.request.use(config => {
    if (sessionStorage.getItem('token') != null) {
        config.headers['token'] = sessionStorage.getItem('token'); // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    }
    return config;
}, error => {
    Promise.reject(error);
})

// respone拦截器
service.interceptors.response.use(
    response => {
        const res = response.data;
        if (res.errcode !== '200') {
            if (res.errcode === 401) {
                //token非法

            } else {

            }
            // return Promise.reject(error);
        } else { //正常返回数据
            return res;
        }
    }, error => {
        return Promise.reject(error);
    }
)

export default service