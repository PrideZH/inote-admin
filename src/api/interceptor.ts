import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { clearToken, getToken, Token } from '@/utils/auth';
import { ElMessage } from 'element-plus';
import { logout, refreshToken } from './admin';
import router from '@/router';

export const TIMEOUT: number = 30 * 1000;

export interface HttpResponse<T = unknown> {
  code: number;
  data: T;
  message: string;
}

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL as string;
axios.defaults.timeout = TIMEOUT;

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token: Token | null = getToken();
    if (config.headers) {
      if (token) config.headers['token'] = token.token;
    }
    // 刷新 token
    const nowTime: number = new Date().getTime();
    if (token && token.timeout < nowTime && token.timeout > nowTime - 60 * 60 * 12) {
      refreshToken();
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
    console.log(error)
    ElMessage.error(error.msg);
    return Promise.reject(error);
  }
);
