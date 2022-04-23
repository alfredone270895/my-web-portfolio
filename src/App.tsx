import React from 'react';
import './i18n';
import { useTranslation } from 'react-i18next';
import { IntlContext } from './i18n/context';
import ParticlesBg from 'particles-bg';
import { Header } from './layout/Header';
import { AppRoutes } from './routes';
import { Footer } from './layout/Footer';

function App(): React.ReactElement {
  const { t } = useTranslation();

  return (
    <IntlContext.Provider
      value={{
        t,
      }}
    >
      <ParticlesBg type="cobweb" bg={true} />
      <Header />
      <AppRoutes />
      <Footer />
    </IntlContext.Provider>
  );
}

export default App;
