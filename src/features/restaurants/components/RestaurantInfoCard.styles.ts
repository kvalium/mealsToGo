import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space.lg};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const RestaurantInfo = styled.View`
  padding: ${(props) => props.theme.space.lg};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Rating = styled.View`
  flex: 1;
  flex-direction: row;
  padding-top: ${(props) => props.theme.space.xs};
  padding-bottom: ${(props) => props.theme.space.xs};
`;

export const Icons = styled.View`
  flex: 1;
  align-items: flex-end;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Open = styled(SvgXml)``;

export const Icon = styled.Image`
  margin-left: ${(props) => props.theme.space.md};
  width: ${(props) => props.theme.sizes.sm};
  height: ${(props) => props.theme.sizes.sm};
`;
