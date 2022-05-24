import { PersonRaw } from './PersonRaw';
import { CountryRaw } from './CountryRaw';

export type PersonAddressRaw = {
  id: number;
  person_id: number;
  city: string;
  address: string;
  zip_code: number;
  lat: string;
  lng: string;
  country_iso: string;
  created_at: Date;
  updated_at: Date;
  address_type: number;
  person?: PersonRaw;
  country_?: CountryRaw;
};
