/* eslint-disable react/no-unstable-nested-components */
import { Lato_400Regular } from "@expo-google-fonts/lato";
import { Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import React from "react";
import { Text } from "react-native-paper";
import { ThemeProvider } from "styled-components";
import { RestaurantsScreen } from "./src/features/restaurants/screens/Restaurants.screen";
import { SettingsScreen } from "./src/features/settings/screens/Settings.screen";
import { theme } from "./src/infrastructure/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

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
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={SettingsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
