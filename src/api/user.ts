import axios from 'axios';
import { Page } from '@/types/global';
import { User } from '@/types/user';

export function getUserList(page: number, size: number) {
  return axios.get<Page<User>>('/api/user', { params: { page, size } });
}
