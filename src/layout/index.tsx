import { IntlContext } from 'i18n/context';
import ParticlesBg from 'particles-bg';
import { useTranslation } from 'react-i18next';

import '../i18n';
import { Body } from './Body';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IntlContext.Provider
      value={{
        t,
      }}
    >
      <ParticlesBg type="cobweb" bg={true} />
      <Header />
      <Body />
      <Footer />
    </IntlContext.Provider>
  );
};
