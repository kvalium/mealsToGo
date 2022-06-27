import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { FlatList, FlatListProps, Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/Spacer";
import { SafeArea } from "../../../components/utility/SafeArea.component";
import { ScreenLoader } from "../../../components/utility/ScreenLoader.component";
import { RestaurantsContext } from "../../../services/restaurants/mock/restaurantsContext";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard.component";
import { RestaurantSearch } from "../components/Search.component";
import { Restaurant } from "../Restaurant.api";

const RestaurantList = styled(
  FlatList as new (props: FlatListProps<Restaurant>) => FlatList<Restaurant>
).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
  background-color: ${(props) => props.theme.colors.brand.primary};
`;

const spacer = () => <Spacer pos="bottom" size="sm" />;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const navigation = useNavigation();

  if (isLoading) {
    return <ScreenLoader />;
  }

  return (
    <SafeArea>
      <RestaurantSearch />
      <RestaurantList
        data={restaurants}
        renderItem={({ item: restaurant }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetails", { restaurant })
            }
          >
            <RestaurantInfoCard restaurant={restaurant} />
          </TouchableOpacity>
        )}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={spacer}
      />
    </SafeArea>
  );
};
