import React from "react";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components";
import { SafeArea } from "./SafeArea.component";

const LoaderContainer = styled(SafeArea)`
  flex: 1;
  justify-content: center;
`;

export const ScreenLoader = () => (
  <LoaderContainer>
    <ActivityIndicator animating size="large" />
  </LoaderContainer>
);
