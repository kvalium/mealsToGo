import React from "react";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard.component";
import { RestaurantMenu } from "../components/RestaurantMenu.component";
import { Restaurant } from "../Restaurant.api";

export const RestaurantDetails = ({
  route: {
    params: { restaurant },
  },
}: {
  route: { params: { restaurant: Restaurant } };
}) => {
  return (
    <>
      <RestaurantInfoCard restaurant={restaurant} />
      <RestaurantMenu />
    </>
  );
};
