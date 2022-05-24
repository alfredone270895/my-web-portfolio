import { PersonAddressRaw } from './PersonAddressRaw';

export type CountryRaw = {
  id: number;
  iso: string;
  nice_name: string;
  iso3: string;
  num_code: string;
  phone_code: number;
  use_zip_code: boolean;
  category_pays: number;
  created_at: Date;
  person_addresses?: PersonAddressRaw[];
};
