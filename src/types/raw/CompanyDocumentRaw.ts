import { CompanyRaw } from './CompanyRaw';

export type CompanyDocumentRaw = {
  id: number;
  document_name: string;
  document_url: string;
  company_id: number;
  created_at: Date;
  updated_at: Date;
  company?: CompanyRaw;
};
