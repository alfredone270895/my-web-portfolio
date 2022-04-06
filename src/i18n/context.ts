import React from 'react';
import { TFunction } from 'i18next';

type LanguageContext = {
  t: TFunction;
};

const DEFAULT_VALUE: LanguageContext = {
  t: () => {},
};

export const IntlContext = React.createContext<LanguageContext>(DEFAULT_VALUE);
