import axios from 'axios';
import { Admin, AdminInfo } from '@/types/admin';
import { Page } from '@/types/global';

export interface TokenVO {
  token: string;
  timeout: number;
}

export interface LoginData {
  username: string,
  password: string
}

export function login(data: LoginData) {
  return axios.post<TokenVO>('/api/admin/login', data);
}

export function refreshToken() {
  return axios.post('/api/admin/refreshToken');
}

export function logout() {
  return axios.post<TokenVO>('/api/admin/logout');
}

export function getAdminInfo() {
  return axios.get<AdminInfo>('/api/admin/me');
}

export function getAdminList(page: number, size: number) {
  return axios.get<Page<Admin>>('/api/admin', { params: { page, size } });
}
