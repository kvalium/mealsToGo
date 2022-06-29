import { Restaurant } from "../../features/restaurants/Restaurant.api";
import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Text } from "../typography/Text";
import WebView from "react-native-webview";
import { Platform } from "react-native";

const CompactImage = styled.Image`
  border-radius: 10px;
  height: 100px;
  width: 120px;
`;

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  height: 100px;
  width: 120px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const RestaurantCompactInfo = ({
  restaurant,
}: {
  restaurant: Restaurant;
}) => {
  const [cover] = restaurant.photos;

  const imageProps = {
    key: restaurant.name,
    source: { uri: cover },
  };

  return (
    <Item>
      {isAndroid ? (
        <CompactWebView {...imageProps} />
      ) : (
        <CompactImage {...imageProps} />
      )}
      <Text variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
