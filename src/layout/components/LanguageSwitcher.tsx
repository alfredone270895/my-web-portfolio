import React from 'react';
import Flag from 'react-world-flags';
import { NavDropdown } from 'react-bootstrap';
import { i18n, TFunction } from 'i18next';

type LanguageProps = {
  t: TFunction;
  i18n: i18n;
};

/**
 * Langaage switcher
 * @param t
 * @param i18n
 * @constructor
 */
// eslint-disable-next-line @typescript-eslint/no-shadow
const LanguageSwitcher: React.FC<LanguageProps> = ({ t, i18n }) => {
  const languageOptions: any = [
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
      {languageOptions.map((item: any) => (
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
