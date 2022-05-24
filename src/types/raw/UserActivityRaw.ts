import { AppUserRaw } from './AppUserRaw';

export type UserActivityRaw = {
  id: number;
  user_id: number;
  model: string;
  entity_id: number;
  title: string;
  description: string;
  created_at: Date;
  user?: AppUserRaw;
};
