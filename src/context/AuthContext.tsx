'use client';

import { createContext, useContext } from 'react';
import useGoogleAuth from '@/app/hooks/useGoogleAuth';

const AuthContext = createContext<ReturnType<typeof useGoogleAuth> | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = useGoogleAuth();

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth precisa estar dentro de AuthProvider");
  return context;
};
