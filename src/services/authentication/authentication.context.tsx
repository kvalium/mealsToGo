import React, { PropsWithChildren } from "react";
import { UserCredential } from "firebase/auth";
import { createContext } from "react";
import { useAuthentication } from "./authentication.service";
import { FirebaseError } from "firebase/app";

export interface AuthenticationContextInterface {
  user: UserCredential | null;
  error: FirebaseError | null;
  loading: boolean;
  authenticate: (email: string, password: string) => Promise<void>;
}

const defaultContext: AuthenticationContextInterface = {
  user: null,
  error: null,
  loading: false,
  authenticate: async () => {},
};

export const AuthenticationContext =
  createContext<AuthenticationContextInterface>(defaultContext);

export const AuthenticationContextProvider = (
  props: PropsWithChildren<any>
) => {
  const p = useAuthentication();
  return <AuthenticationContext.Provider value={p} {...props} />;
};
