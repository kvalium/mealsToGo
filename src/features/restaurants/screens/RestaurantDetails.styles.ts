import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const RestaurantDetailsContainer = styled.View`
  padding: ${(props) => props.theme.space.lg};
  flex: 1;
`;

export const RestaurantCover = styled(Card.Cover)``;
