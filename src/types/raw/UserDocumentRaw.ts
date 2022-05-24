import { AppUserRaw } from './AppUserRaw';

export type UserDocumentRaw = {
  id: number;
  user_id: number;
  document_name: string;
  document_url: string;
  created_at: Date;
  updated_at: Date;
  user?: AppUserRaw;
};
