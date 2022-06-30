import { useNavigation } from "@react-navigation/native";
import { Spacer } from "../../../components/spacer/Spacer";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
} from "../components/Account.styles";

export const AccountScreen = () => {
  const { navigate } = useNavigation();

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          onPress={() => navigate("Login" as never)}
        >
          Login
        </AuthButton>
        <Spacer pos="top" size="sm" />
        <AuthButton icon="email" onPress={() => navigate("Register" as never)}>
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
