export interface Page<T> {
  records: T[],
  total: number,
  pages: number
}
