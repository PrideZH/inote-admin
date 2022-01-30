import { Page } from '@/types/global';
import { Role } from '@/types/role';
import axios from 'axios';

export function getRoleList(page: number, size: number) {
  return axios.get<Page<Role>>('/api/role', { params: { page, size } });
}
