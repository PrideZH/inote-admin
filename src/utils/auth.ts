export interface Token {
  token: string;
  timeout: number;
}

const isLogin = (): boolean => {
  return !!localStorage.getItem('token');
};

const getToken = (): Token | null => {
  const tokenbuff: string | null = localStorage.getItem('token');
  if (tokenbuff === null) return null;
  return JSON.parse(tokenbuff);
};

const setToken = (token: Token) => {
  localStorage.setItem('token', JSON.stringify(token));
};

const clearToken = () => {
  localStorage.removeItem('token');
};

export { isLogin, getToken, setToken, clearToken };
