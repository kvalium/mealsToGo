import React, { createContext, Dispatch, PropsWithChildren } from "react";
import { useLocation } from "./locationService";

export interface LocationContextInterface {
  location: string | null;
  keyword: string | null;
  search: Dispatch<string>;
  isLoading: boolean;
  error: string | null;
}

const defaultContext: LocationContextInterface = {
  location: null,
  keyword: null,
  search: () => null,
  isLoading: true,
  error: null,
};

export const LocationContext =
  createContext<LocationContextInterface>(defaultContext);

export const LocationContextProvider = (props: PropsWithChildren<any>) => {
  const p = useLocation();
  return <LocationContext.Provider value={p} {...props} />;
};
