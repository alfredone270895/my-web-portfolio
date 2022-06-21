export type DefaultAxiosGetResponse<T> = {
  code: string;
  success: T[] | T | string;
};

export type ApiMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';
