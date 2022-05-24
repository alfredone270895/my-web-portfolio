import { DictionaryRaw } from './DictionaryRaw';

export type LanguageRaw = {
  id: number;
  name: string;
  iso639: string;
  dictionaries?: DictionaryRaw[];
};
