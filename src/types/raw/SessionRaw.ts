import { AppUserRaw } from './AppUserRaw';

export type SessionRaw = {
  id: number;
  user_id: number;
  token: string;
  cookie_token: string;
  platform: number;
  active_at: Date;
  created_at: Date;
  updated_at: Date;
  expire_at: Date;
  user?: AppUserRaw;
};
