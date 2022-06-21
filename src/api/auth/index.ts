import { LOGIN_ROUTE, REFRESH_ROUTE } from './routes';
import { postApi } from '../api';
import { AuthResponse } from './types';

/**
 * Login the user with email and password
 * @param email
 * @param password
 */
export async function login(
  email: string,
  password: string,
): Promise<AuthResponse> {
  return postApi<AuthResponse>(LOGIN_ROUTE, { email, password });
}

/**
 * Refresh the jwt with refresh token and user token
 * @param refresh
 * @param instance
 */
export async function refreshAccessToken(
  refresh: string,
  instance: string,
): Promise<AuthResponse> {
  return postApi<AuthResponse>(REFRESH_ROUTE, { refresh, instance });
}
