export interface Token {
  token: string;
}

export interface Page<T> {
  records: T[],
  total: number,
  pages: number
}
