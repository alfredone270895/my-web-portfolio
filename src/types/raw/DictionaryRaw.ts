import { LanguageRaw } from './LanguageRaw';

export type DictionaryRaw = {
  id: number;
  table_name: string;
  column_name: string;
  language_id: number;
  created_at: Date;
  updated_at: Date;
  language?: LanguageRaw;
};
