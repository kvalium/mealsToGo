import React, { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/LocationContext";

const RestaurantSearchContainer = styled.View`
  padding: ${(props) => props.theme.space.lg};
`;

export const RestaurantSearch = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword || "");

  return (
    <RestaurantSearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onChangeText={setSearchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
      />
    </RestaurantSearchContainer>
  );
};
