export interface Analysis {
  totalUser?: number; // 总用户量
  todayUser?: number; // 今日登录用户量
  newUsers?: { [key: string]: number }; // 近7天新增用户量
  activeUsers?: { [key: string]: number }; // 近7天活跃用户量
  totalOpenNote?: number; // 总公开笔记量
}
