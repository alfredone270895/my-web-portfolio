import { AppUserRaw } from './AppUserRaw';
import { CompanyContactRaw } from './CompanyContactRaw';
import { PersonAddressRaw } from './PersonAddressRaw';
import { PersonContactRaw } from './PersonContactRaw';
import { CompanyRaw } from './CompanyRaw';
import { CompanyAddressRaw } from './CompanyAddressRaw';

export type PersonRaw = {
  id: number;
  name: string;
  surname: string;
  fiscal_code: string;
  gender: number;
  company_id: number;
  company_address_id: number;
  birth_date: Date;
  employment: string;
  nationality: string;
  created_at: Date;
  updated_at: Date;
  company?: CompanyRaw;
  company_address?: CompanyAddressRaw;
  app_users?: AppUserRaw[];
  company_contacts?: CompanyContactRaw[];
  person_addresses?: PersonAddressRaw[];
  person_contacts?: PersonContactRaw[];
};
