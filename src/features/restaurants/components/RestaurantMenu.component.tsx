import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { List } from "react-native-paper";

export const RestaurantMenu = () => {
  return (
    <ScrollView>
      <List.Section title="Menu">
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="glass-cocktail" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>

        <List.Accordion
          title="Starters"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
        <List.Accordion
          title="Main Course"
          left={(props) => <List.Icon {...props} icon="chef-hat" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
};
