import React from "react";
import { SvgXml } from "react-native-svg";
import { Restaurant } from "../Restaurant.api";
import stars from "../../../../assets/stars";
import isOpen from "../../../../assets/isOpen";
import { Spacer } from "../../../components/spacer/Spacer";
import { Text } from "../../../components/typography/Text";
import {
  RestaurantCard,
  RestaurantCover,
  RestaurantInfo,
  Section,
  Rating,
  Icons,
  Open,
  Icon,
} from "./RestaurantInfoCard.styles";

export const RestaurantInfoCard = ({
  restaurant,
}: {
  restaurant: Restaurant;
}) => {
  const rating = Array.from(new Array(Math.round(restaurant?.rating || 0)));
  return (
    <>
      <RestaurantCard elevation={5}>
        <RestaurantCover
          key={restaurant.name}
          source={{ uri: restaurant.photos[0] }}
        />
        <RestaurantInfo>
          <Text variant="label">{restaurant.name}</Text>
          <Section>
            <Rating>
              {rating.map((_, i) => (
                <SvgXml key={i} xml={stars} width={20} height={20} />
              ))}
            </Rating>
            <Icons>
              {restaurant?.isClosedTemporarily && (
                <Spacer pos="right" size="sm">
                  <Text variant="error">CLOSED TEMPORARILY</Text>
                </Spacer>
              )}
              {restaurant?.isOpenNow && (
                <Open xml={isOpen} width={16} height={16} />
              )}
              {restaurant.icon && <Icon source={{ uri: restaurant.icon }} />}
            </Icons>
          </Section>
          <Text>{restaurant.address}</Text>
        </RestaurantInfo>
      </RestaurantCard>
    </>
  );
};
