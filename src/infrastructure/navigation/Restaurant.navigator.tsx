import React from "react";
import {
  createStackNavigator,
  StackNavigationOptions,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/Restaurants.screen";
import { RestaurantDetails } from "../../features/restaurants/screens/RestaurantDetails.screen";

const RestaurantStack = createStackNavigator();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
  ...TransitionPresets.ModalPresentationIOS,
};

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={screenOptions}>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetails}
      />
    </RestaurantStack.Navigator>
  );
};
