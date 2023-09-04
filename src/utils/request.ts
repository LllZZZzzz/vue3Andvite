import axios from 'axios';
import { ElMessage } from 'element-plus';

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
});
request.interceptors.request.use(
  (config) => {
    // 设置token
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // 处理网络错误相关
    let message = '';
    const status = error.response.status;
    switch (status) {
      case 401:
        message = '未登录';
        break;
      case 403:
        message = '无权限';
        break;
      case 404:
        message = '网络请求不存在';
        break;
      default:
        message = error.response.data.message;
        break;
    }
    ElMessage({
      type: 'error',
      message,
    });
    return Promise.reject(error);
  },
);
export default request;
