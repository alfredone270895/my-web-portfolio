import { AppUserRaw } from './AppUserRaw';

export type NotificationRaw = {
  id: number;
  chat_id: number;
  title: string;
  sender_id: number;
  recipient_id: number;
  description: string;
  html_description: string;
  href: string;
  created_at: Date;
  notification_class: string;
  timer: boolean;
  reminder: boolean;
  seen: boolean;
  updated_at: Date;
  sender?: AppUserRaw;
  recipient?: AppUserRaw;
};
