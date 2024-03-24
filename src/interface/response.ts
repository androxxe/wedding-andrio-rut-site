export interface APIResponse<T, M = null> {
  statusCode: number;
  message: string;
  data: T;
  meta: M;
}

export interface BaseMeta {
  page: number;
  limit: number;
  total: number;
}
