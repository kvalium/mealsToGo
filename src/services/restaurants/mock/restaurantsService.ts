import { useContext, useEffect, useState } from "react";
import { mockImages, mocks } from ".";
import { Restaurant } from "../../../features/restaurants/Restaurant.api";
import { LocationContext } from "../../location/LocationContext";
import { RestaurantApiResult } from "./RestaurantApiResult";

export const useRestaurant = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [restaurants, setRestaurants] = useState<Restaurant[] | null>(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (locationQuery?: string) => {
    setLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(locationQuery)
        .then((r) => {
          setRestaurants(r);
        })
        .catch((e) => setError(e))
        .finally(() => {
          setLoading(false);
        });
    }, 2000);
  };

  useEffect(() => {
    location && retrieveRestaurants(location);
  }, [location]);

  return { isLoading, error, restaurants, retrieveRestaurants };
};

export const restaurantsRequest = (
  location = "37.7749295,-122.4194155"
): Promise<Restaurant[]> => {
  return new Promise((resolve, reject) =>
    mocks[location]
      ? resolve(restaurantsTransform(mocks[location].results))
      : reject("no location")
  );
};

const restaurantsTransform = (
  restaurants: RestaurantApiResult[]
): Restaurant[] => {
  return restaurants.map((r) => ({
    id: r.place_id,
    name: r.name,
    photos: mockImages,
    address: r.vicinity,
    icon: r.icon,
    isClosedTemporarily: r.business_status === "CLOSED_TEMPORARILY",
    isOpenNow: !!r.opening_hours?.open_now,
    rating: r.rating,
  }));
};
