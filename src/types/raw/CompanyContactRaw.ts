import { PersonRaw } from './PersonRaw';
import { CompanyRaw } from './CompanyRaw';
import { CompanyAddressRaw } from './CompanyAddressRaw';

export type CompanyContactRaw = {
  id: number;
  email_telephone: boolean;
  contact: string;
  person_id: number;
  created_at: Date;
  updated_at: Date;
  company_id: number;
  company_address_id: number;
  person?: PersonRaw;
  company?: CompanyRaw;
  company_address?: CompanyAddressRaw;
};
