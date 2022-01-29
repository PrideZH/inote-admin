import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { clearToken, getToken } from '@/utils/auth';
import { ElMessage } from 'element-plus';
import { logout } from './admin';
import router from '@/router';

export interface HttpResponse<T = unknown> {
  code: number;
  data: T;
  message: string;
}

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (config.headers) {
      const token: string | null = getToken();
      if (token) config.headers['token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response: AxiosResponse<HttpResponse>) => {
    const res: HttpResponse<unknown> = response.data;
    if (res.code !== 200) {
      ElMessage.error(`[${res.code}] ${res.message} ${res.data ? res.data : ''}`);
      // 401: token 无效; 50012: Other clients logged in; 50014: Token expired;
      if ([401].includes(res.code)) {
        logout();
        clearToken();
        router.push('/login');
      }
      return Promise.reject(new Error(res.message || 'Error'));
    }
    return res;
  },
  (error) => {
    ElMessage.error(error.msg);
    return Promise.reject(error);
  }
);
