import React from "react";
import { RestaurantCompactInfo } from "../../../components/restaurant/RestaurantCompactInfo.component";
import { Restaurant } from "../../restaurants/Restaurant.api";

export const MapCallout = ({ restaurant }: { restaurant: Restaurant }) => {
  return <RestaurantCompactInfo restaurant={restaurant} />;
};
