import React from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { RestaurantList } from "../components/RestaurantList";
import { RestaurantSearch } from "../components/RestaurantSearch";

const getPaddingTop = () =>
  Platform.OS === "android" && StatusBar.currentHeight
    ? StatusBar.currentHeight
    : 0;

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RestaurantSearch />
      <RestaurantList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getPaddingTop(),
  },
});
