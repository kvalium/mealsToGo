import React, { useState } from "react";
import { FlatList, FlatListProps } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/Spacer";
import { SafeArea } from "../../../components/utility/SafeArea.component";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard.component";
import { Restaurant } from "../Restaurant.api";

const myResto: Restaurant = {
  id: 1,
  name: "Some Restaurant",
  address: "14, rue des peupliers",
  isOpenNow: true,
  isClosedTemporarily: true,
  rating: 5,
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",

  photos: [
    "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
  ],
};

const RestaurantSearchContainer = styled.View`
  padding: ${(props) => props.theme.space.lg};
`;

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
  const [search, setSearch] = useState("");

  return (
    <SafeArea>
      <RestaurantSearchContainer>
        <Searchbar
          placeholder="Search a restaurant"
          value={search}
          onChangeText={setSearch}
        />
      </RestaurantSearchContainer>
      <RestaurantList
        data={[
          myResto,
          { ...myResto, id: 2, name: "plop" },
          { ...myResto, id: 3 },
          { ...myResto, id: 4 },
        ]}
        renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        keyExtractor={({ id }) => id.toString()}
        ItemSeparatorComponent={spacer}
      />
    </SafeArea>
  );
};
