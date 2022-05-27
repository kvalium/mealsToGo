import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import { Restaurant } from "../types/Restaurant";

export const RestaurantInfo = ({
  restaurant,
  style,
}: {
  restaurant: Restaurant;
  style: StyleProp<ViewStyle>;
}) => {
  return (
    <View style={style}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: "https://picsum.photos/142" }} />
        <Card.Content style={styles.cardContent}>
          <Title>{restaurant.name}</Title>
          <Paragraph>{restaurant.address}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
  },
  cardContent: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingTop: 10,
  },
});
