/* eslint-disable react/no-unstable-nested-components */
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";
import React from "react";
import { MapScreen } from "../../features/map/screens/Map.screen";
import { SettingsScreen } from "../../features/settings/screens/Settings.screen";
import { RestaurantNavigator } from "./Restaurant.navigator";

export const AppNavigator = () => {
  const TAB_ICONS: Record<string, keyof typeof Ionicons.glyphMap> = {
    Restaurants: "restaurant",
    Map: "map",
    Settings: "settings",
  };

  const Tab = createBottomTabNavigator();

  const screenOptions = ({
    route,
  }: {
    route: RouteProp<ParamListBase, string>;
  }) => ({
    tabBarIcon: ({ color, size }: { color: string; size: number }) => (
      <Ionicons name={TAB_ICONS[route.name]} size={size} color={color} />
    ),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    headerShown: false,
  });

  return (
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
  );
};
