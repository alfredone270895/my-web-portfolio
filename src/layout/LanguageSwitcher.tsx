import React, { ReactElement, useContext } from 'react';
import Flag from 'react-world-flags';
import { NavDropdown } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';
import { IntlContext } from '../i18n/context';

const LANGUAGE_OPTIONS: {
  value: string;
  label: ReactElement;
}[] = [
  {
    value: 'it-IT',
    label: <Flag code="it" width={50} />,
  },
  {
    value: 'en-US',
    label: <Flag code="us" width={50} />,
  },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const { t } = useContext(IntlContext);

  if (!i18n) {
    return null;
  }

  return (
    <NavDropdown title={t('Language')} id="basic-nav-dropdown">
      {LANGUAGE_OPTIONS.map((item) => (
        <NavDropdown.Item
          key={item.value}
          disabled={i18n.language === item.value}
          active={i18n.language === item.value}
          onClick={() => {
            i18n.changeLanguage(item.value);
            localStorage.setItem('language', item.value);
          }}
          href="#"
        >
          {item.label}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
};
export default LanguageSwitcher;
