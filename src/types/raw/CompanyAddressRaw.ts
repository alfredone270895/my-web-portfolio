import { PersonRaw } from './PersonRaw';
import { CompanyContactRaw } from './CompanyContactRaw';
import { CompanyRaw } from './CompanyRaw';

export type CompanyAddressRaw = {
  id: number;
  address: string;
  city: string;
  cap: string;
  lat: string;
  lng: string;
  country_iso: string;
  created_at: Date;
  company_id: number;
  is_primary: boolean;
  updated_at: Date;
  company?: CompanyRaw;
  people?: PersonRaw[];
  company_contacts?: CompanyContactRaw[];
};
