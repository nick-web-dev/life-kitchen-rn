import React from "react";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREENS } from "../utils/Constants";
import MainScreen from "../screens/kitchen/home";
import { Appearance } from "react-native";

const AuthStack = createNativeStackNavigator();

const AuthenticatedStack = () => {
  const colorScheme = Appearance.getColorScheme();
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name={SCREENS.MainScreen} component={MainScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default AuthenticatedStack;
