import { createContext, Dispatch, SetStateAction } from 'react';

export type AuthenticationContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
};

export const AuthenticationContext = createContext<AuthenticationContextType>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});
