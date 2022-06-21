export type AuthResponse = {
  jwt: string;
  expires_at: number;
  token: string;
  refresh: string;
};
