import React, { createContext, Dispatch, PropsWithChildren } from "react";
import { Restaurant } from "../../../features/restaurants/Restaurant.api";
import { useRestaurant } from "./restaurants.service";

interface RestaurantContextInterface {
  restaurants: Restaurant[] | null;
  retrieveRestaurants: Dispatch<string>;
  error: string | null;
  isLoading: boolean;
}

const contextDefault: RestaurantContextInterface = {
  restaurants: null,
  retrieveRestaurants: () => null,
  error: null,
  isLoading: true,
};

export const RestaurantsContext =
  createContext<RestaurantContextInterface>(contextDefault);

export const RestaurantsContextProvider = (props: PropsWithChildren<any>) => {
  const { isLoading, error, restaurants, retrieveRestaurants } =
    useRestaurant();

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
        retrieveRestaurants,
      }}
      {...props}
    />
  );
};
