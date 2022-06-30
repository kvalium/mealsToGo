import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
} from "../components/Account.styles";

export const RegisterScreen = () => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        {/* <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          label="Email"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <AuthButton icon="lock-open-outline" onPress={() => console.log("pl")}>
          Login
        </AuthButton> */}
      </AccountContainer>
    </AccountBackground>
  );
};
