import {
  createStackNavigator,
  StackNavigationOptions,
  TransitionPresets,
} from "@react-navigation/stack";
import React from "react";
import { AccountScreen } from "../../features/account/screens/Account.screen";
import { LoginScreen } from "../../features/account/screens/Login.screen";
import { RegisterScreen } from "../../features/account/screens/Register.screen";

const Stack = createStackNavigator();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
  ...TransitionPresets.ModalPresentationIOS,
};

export const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Main" component={AccountScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
