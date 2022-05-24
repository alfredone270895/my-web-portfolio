import { LOGIN_ROUTE, REFRESH_ROUTE } from './routes';
import axios from 'axios';

export async function login(email: string, password: string) {
  const result = await axios.post<any, any>(LOGIN_ROUTE, { email, password });
  return result?.data.success ?? false;
}

export async function refreshAccessToken(refresh: string, instance: string) {
  const result = await axios.post<any, any>(REFRESH_ROUTE, {
    refresh,
    instance,
  });
  return result?.data.success ?? false;
}
