import axios from 'axios';
import { Admin, AdminInfo } from '@/types/admin';
import { Token } from '@/types/global';
import { Page } from '@/types/global';

export interface LoginData {
  username: string,
  password: string
}

export function login(data: LoginData) {
  return axios.post<Token>('/api/admin/login', data);
}

export function logout() {
  return axios.post<Token>('/api/admin/logout');
}

export function getAdminInfo() {
  return axios.get<AdminInfo>('/api/admin/me');
}

export function getAdminList(page: number, size: number) {
  return axios.get<Page<Admin>>('/api/admin', { params: { page, size } });
}
