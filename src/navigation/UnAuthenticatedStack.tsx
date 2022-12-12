import React from "react";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { Appearance } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREENS } from "../utils/Constants";
import LoginScreen from "../screens/login";

const AuthStack = createNativeStackNavigator();

const UnAuthenticatedStack = () => {
  const colorScheme = Appearance.getColorScheme();
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name={SCREENS.Login} component={LoginScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default UnAuthenticatedStack;
