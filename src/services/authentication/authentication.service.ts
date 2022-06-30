import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { AuthenticationContextInterface } from "./authentication.context";

export const useAuthentication = (): AuthenticationContextInterface => {
  const [user, setUser] =
    useState<AuthenticationContextInterface["user"]>(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const authenticate: AuthenticationContextInterface["authenticate"] = (
    email,
    password
  ) => {
    setLoading(true);
    return signInWithEmailAndPassword(getAuth(), email, password)
      .then(setUser)
      .catch(setError)
      .finally(() => setLoading(false));
  };

  return { user, authenticate, error, loading };
};
