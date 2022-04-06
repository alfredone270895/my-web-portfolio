import React, { ReactElement, useContext } from 'react';
import Flag from 'react-world-flags';
import { NavDropdown } from 'react-bootstrap';

import { IntlContext } from '../i18n/context';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const { t } = useContext(IntlContext);

  const languageOptions: {
    value: string;
    label: ReactElement;
  }[] = [
    {
      value: 'it',
      label: <Flag code="it" width={50} />,
    },
    {
      value: 'en',
      label: <Flag code="us" width={50} />,
    },
  ];

  return (
    <NavDropdown title={t('Language')} id="basic-nav-dropdown">
      {languageOptions.map((item) => (
        <NavDropdown.Item
          key={item.value}
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
