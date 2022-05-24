import { AppUserRaw } from './AppUserRaw';

export type ChatRaw = {
  id: number;
  sender_id: number;
  recipient_id: number;
  status: boolean;
  created_at: Date;
  type: number;
  sender?: AppUserRaw;
  recipient?: AppUserRaw;
};
