import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";

const RestaurantSearchContainer = styled.View`
  padding: ${(props) => props.theme.space.lg};
`;

export const RestaurantSearch = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword || "");

  useEffect(() => {
    keyword && setSearchKeyword(keyword);
  }, [keyword]);

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
