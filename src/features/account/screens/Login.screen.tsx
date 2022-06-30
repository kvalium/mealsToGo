import React, { useContext, useState } from "react";
import { View } from "react-native";
import { Spacer } from "../../../components/spacer/Spacer";
import { Text } from "../../../components/typography/Text";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
} from "../components/Account.styles";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authenticate, error, loading } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <View>
          <AuthInput
            label="Email"
            value={email}
            placeholder="email"
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
          />
          <Spacer pos="top" size="sm" />
          <AuthInput
            label="Password"
            placeholder="password"
            value={password}
            textContentType="password"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            autoCapitalize="none"
          />
          <Spacer pos="top" size="sm" />

          <AuthButton
            icon="lock-open-outline"
            onPress={() => authenticate(email, password)}
            loading={loading}
            disabled={!email || !password}
          >
            Login
          </AuthButton>
          {error && (
            <Spacer pos="top" size="sm">
              <Text variant="error">{error.message}</Text>
            </Spacer>
          )}
        </View>
      </AccountContainer>
    </AccountBackground>
  );
};
