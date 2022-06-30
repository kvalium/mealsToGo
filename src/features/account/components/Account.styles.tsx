import { Button, TextInput } from "react-native-paper";
import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space.xl};
  margin-top: ${(props) => props.theme.space.md};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
  mode: "contained",
})`
  padding: ${(props) => props.theme.space.md};
`;

export const AuthInput = styled(TextInput)`
  width: 200px;
`;
