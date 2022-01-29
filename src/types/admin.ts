export interface Admin {
  id?: number,
  usernaem?: string;
  password?: string;
  avatar?: string;
  createTime?: Date;
  updateTime?: Date;
}

export interface AdminInfo {
  username?: string;
  password?: string;
  nickname?: string;
  avatar?: string;
}
