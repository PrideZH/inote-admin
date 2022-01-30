import { Analysis } from '@/types/statistic';
import axios from 'axios';

export function getAnalysis() {
  return axios.get<Analysis>('/api/statistic/analysis');
}
