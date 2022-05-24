import { CompanyAddressRaw } from './CompanyAddressRaw';
import { CompanyDocumentRaw } from './CompanyDocumentRaw';
import { PersonRaw } from './PersonRaw';
import { CompanyContactRaw } from './CompanyContactRaw';

export type CompanyRaw = {
  id: number;
  name: string;
  fiscal_code: string;
  vat_number: string;
  pec_code: string;
  pec_invoicing: string;
  website: string;
  image: string;
  iban: string;
  type: number;
  created_at: Date;
  archive: number;
  abcd: number;
  updated_at: Date;
  company_addresses?: CompanyAddressRaw[];
  company_documents?: CompanyDocumentRaw[];
  people?: PersonRaw[];
  company_contacts?: CompanyContactRaw[];
};
