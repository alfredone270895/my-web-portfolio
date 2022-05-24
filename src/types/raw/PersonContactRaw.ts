import { PersonRaw } from './PersonRaw';

export type PersonContactRaw = {
  id: number;
  email_telephone: boolean;
  contact: string;
  person_id: number;
  created_at: Date;
  updated_at: Date;
  person?: PersonRaw;
};
