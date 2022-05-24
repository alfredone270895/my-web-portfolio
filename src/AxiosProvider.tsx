import { useContext, useEffect, useMemo } from 'react';
import axios from 'axios';
import { getStorage, setStorage } from './utils/local-storage';
import { refreshAccessToken } from './api/auth';
import { InteractionContext } from './context/interaction';
import { toast } from 'react-toastify';

type AxiosProviderProps = {
  children: any;
};

const AxiosProvider: React.FC<AxiosProviderProps> = ({ children }) => {
  const { setInteractionMessage, interactionMessage } =
    useContext(InteractionContext);

  useMemo(() => {
    axios.interceptors.request.use(
      (config) => {
        const jwt = getStorage('jwt');
        if (jwt) {
          config.headers!.Authorization = jwt;
          config.headers!.token = getStorage('token') ?? '';
        }

        return config;
      },
      (err) => Promise.reject(err),
    );
    axios.interceptors.response.use(
      (response) => {
        // Do something if needed before response
        return response;
      },
      async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 403) {
          if (!originalRequest._retry) {
            originalRequest._retry = true;
            const accessTokenWithRefresh = await refreshAccessToken(
              getStorage('refresh') ?? '',
              getStorage('token') ?? '',
            );
            if (accessTokenWithRefresh) {
              setStorage('token', accessTokenWithRefresh.token);
              setStorage(
                'jwt',
                accessTokenWithRefresh.jwt,
                accessTokenWithRefresh.expires_at,
              );
              setStorage(
                'refresh',
                accessTokenWithRefresh.refresh,
                Date.now() + 12 * 60 * 60 * 1000,
              );
              axios.defaults.headers.common.Authorization =
                accessTokenWithRefresh.jwt;
              axios.defaults.headers.common.token =
                accessTokenWithRefresh.token;
              return axios(originalRequest);
            }
          } else {
            setInteractionMessage({
              message: 'Forbidden',
              type: 'error',
            });
          }
        }

        if (error.response.status === 500) {
          setInteractionMessage({
            message: 'Forbidden',
            type: 'error',
          });
        }

        if (error.response.status === 400 || error.response.status === 401) {
          setInteractionMessage({
            message: error.response.data.error,
            type: 'error',
          });
        }

        return false;
      },
    );
  }, [setInteractionMessage]);

  useEffect(() => {
    if (interactionMessage) {
      switch (interactionMessage.type) {
        case 'error':
          toast.error(interactionMessage.message, {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          break;
        case 'success':
          toast.success(interactionMessage.message, {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          break;
      }
      setInteractionMessage(undefined);
    }
  }, [interactionMessage]);

  return children;
};

export default AxiosProvider;
