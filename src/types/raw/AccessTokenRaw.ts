import { AppUserRaw } from './AppUserRaw';

export type AccessTokenRaw = {
  id: number;
  token: string;
  active: boolean;
  created_at: Date;
  user_id: number;
  otp: string;
  expire_at: Date;
  user?: AppUserRaw;
};
