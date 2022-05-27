import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Loader } from "../../../components/Loader";
import { useFetchRestaurants } from "../api/restaurantApi";
import { RestaurantInfo } from "./RestaurantInfo";

const items = new Array(10).fill({
  name: "plop",
  address: "10 rue des peupliers",
});

export const RestaurantList = () => {
  const { data: restaurants, isLoading } = useFetchRestaurants();

  console.log({ restaurants });

  if (isLoading) {
    return <Loader text="loading restaurants..." />;
  }
  return (
    <ScrollView style={styles.container}>
      {items.map((r, i) => (
        <RestaurantInfo key={i} restaurant={r} style={styles.cardItem} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightsteelblue",
    padding: 16,
  },
  cardItem: {
    marginBottom: 16,
  },
});
