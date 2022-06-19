import styled, { DefaultTheme } from "styled-components/native";

type SpacerProps = {
  pos?: "top" | "right" | "bottom" | "left";
  size?: keyof DefaultTheme["sizes"];
};

export const Spacer = styled.View<SpacerProps>`
  padding-${({ pos = "bottom" }) => pos}: ${({ theme, size = "xl" }) =>
  theme.sizes[size]};
`;
