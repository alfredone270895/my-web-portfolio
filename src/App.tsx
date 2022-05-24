import React, { useState } from 'react';
import './i18n';
import { useTranslation } from 'react-i18next';
import { IntlContext } from './i18n/context';
import ParticlesBg from 'particles-bg';
import { Header } from './layout/Header';
import { AppRoutes } from './routes';
import { Footer } from './layout/Footer';
import { AuthenticationContext } from 'api/auth/context';
import { InteractionContext } from './context/interaction';
import AxiosProvider from './AxiosProvider';
import { ToastContainer } from 'react-toastify';
import { getStorage } from './utils/local-storage';

function App(): React.ReactElement {
  const { t } = useTranslation();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    getStorage('token') !== null && getStorage('refresh') !== null,
  );
  const [interactionMessage, setInteractionMessage] = useState<
    | {
        message: string;
        type: 'error' | 'success';
      }
    | undefined
  >(undefined);

  return (
    <IntlContext.Provider
      value={{
        t,
      }}
    >
      <AuthenticationContext.Provider
        value={{
          isAuthenticated,
          setIsAuthenticated,
        }}
      >
        <InteractionContext.Provider
          value={{
            interactionMessage,
            setInteractionMessage,
          }}
        >
          <AxiosProvider>
            <ParticlesBg type="cobweb" bg={true} />
            <Header />

            <div className="page-content">
              <AppRoutes />
            </div>

            <ToastContainer />
            <Footer />
          </AxiosProvider>
        </InteractionContext.Provider>
      </AuthenticationContext.Provider>
    </IntlContext.Provider>
  );
}

export default App;
