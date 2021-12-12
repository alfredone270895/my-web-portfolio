import ParticlesBg from 'particles-bg';
import { useTranslation } from 'react-i18next';

import '../i18n';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
/**
 * Layout of application
 * @constructor
 */
export const Layout: React.FC = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  return (
    <>
      <Header t={t} i18n={i18n} />
      <Body t={t} />
      <ParticlesBg type="cobweb" bg={true} />
      <Footer t={t} />
    </>
  );
};
