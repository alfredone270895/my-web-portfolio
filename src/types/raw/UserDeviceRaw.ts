import { AppUserRaw } from './AppUserRaw';

export type UserDeviceRaw = {
  id: number;
  user_id: number;
  client_info: string;
  device: string;
  model: string;
  brand: string;
  os: string;
  ip_address: string;
  created_at: Date;
  country_iso: string;
  hostname: string;
  http_user_agent: string;
  city: string;
  region: string;
  lat: string;
  lng: string;
  org: string;
  user?: AppUserRaw;
};
